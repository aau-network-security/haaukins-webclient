import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, chakra, IconButton, Flex, Spacer, Center, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrg, fetchOrgs, selectOrg } from '../../features/organizations/organizationSlice';
import LoadingSpin from 'react-loading-spin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import UserDialogDelete from './UserDialogDelete';
import { Tooltip } from 'react-tooltip';
import {
  IoMdAdd,
  IoMdRefresh,
} from 'react-icons/io'
import {
  TiTick
} from 'react-icons/ti'
import {
  RxCross2
} from 'react-icons/rx'
import { RiEditLine } from 'react-icons/ri'
import NewUserModal from './NewUserModal';
import { deleteUser, fetchUsers } from '../../features/users/userSlice';
import { MdDelete } from 'react-icons/md';

function UsersTable({ byRole }) {
  const IconFa = chakra(FontAwesomeIcon)

  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [usernameState, setUsernameState] = useState('')
  const onAlertClose = () => setIsAlertOpen(false)

  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)
  const onNewUserModalClose = () => setIsNewUserModalOpen(false)

  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false)
  const onUpdateUserModalClose = () => setIsUpdateUserModalOpen(false)

  const cancelRef = React.useRef()
  const [indexState, setIndexState] = useState(0)

  const status = useSelector((state) => state.user.status)
  const selectedOrg = useSelector((state) => state.org.selectedOrg)
  const error = useSelector((state) => state.user.error)
  const statusCode = useSelector((state) => state.user.statusCode)
  const users = useSelector((state) => state.user.users)

  const loggedInUser = useSelector((state) => state.user.loggedInUser)

  const dispatch = useDispatch()
  
  
  //Callback for alertDialog 
  // TODO write deleteOrg action, reducer, etc.
  const doDeleteUser = (username, index) => {
    console.log("deleting org", username)
    let user = {
      id: index,
      name: username
    }
    dispatch(deleteUser(user))
  }
  
  useEffect(() => {
    if (selectedOrg != null) {
      console.log("fetching users")
      dispatch(fetchUsers(selectedOrg.Name))
    } else {
      dispatch(fetchUsers(""))
    }
  }, [dispatch, selectedOrg])

  const openAlertDialog = (username, index) => {
    setUsernameState(username)
    setIndexState(index)
    setIsAlertOpen(true)
  }

  const openModal = () => {
    setIsNewUserModalOpen(true)
  }

  return (
    <>
      <Flex 
        w="50%" 
        h="650px"
        borderRadius="30px"
      >
          <div className='container'>
            <Flex className='container-header'>
              <h2 className='container-header-text'>Users</h2>
              <Spacer />
              <IconButton 
                className='container-header-button'
                colorScheme='green'
                variant='outline'
                icon={<Icon as={IoMdAdd}/>}
                data-tooltip-content="Add User"
                data-tooltip-place="left"
                data-tooltip-effect="solid"
                data-tooltip-id="tooltip-add-user"
                onClick={openModal}
              />
              <Tooltip 
                id={"tooltip-add-user"}
                style={{
                    backgroundColor: "#211a52"
                }}
              />
              
            </Flex>
              {status === 'fetching'
              ?
                <Center
                  position="relative"
                  transform="translateY(100%)"
                >
                  <LoadingSpin
                    primaryColor="#211a52"
                    size="100px"
                  />
                </Center>
                            
              : Object.keys(users).length === 0 
              ?
              <Center>
                <h2>No users registered</h2>
              </Center>
              :
                <>
                  <TableContainer  overflowY="unset" height="95%">
                    <Table variant='simple'>
                      <Thead position="sticky" top={0} zIndex="docked" backgroundColor="white">
                        <Tr>
                          <Th textAlign="center">Username</Th>
                          <Th textAlign="center">Name</Th>
                          <Th textAlign="center">Email</Th>
                          <Th textAlign="center">Organization</Th>
                          <Th textAlign="center">Role</Th>
                          <Th textAlign="center">Edit</Th>
                          <Th textAlign="center">Delete</Th>             
                        </Tr>
                      </Thead>
                      <Tbody>
                        {Object.entries(users).map(([key, user]) => (
                          <Tr 
                            key={user.user.Username}
                          >
                            <Td textAlign="center">{user.user.Username}</Td>
                            <Td textAlign="center">{user.user.FullName}</Td>
                            <Td textAlign="center">{user.user.Email}</Td>
                            <Td textAlign="center">{user.user.Organization}</Td>
                            <Td textAlign="center">{user.user.Role.split('role::')[1]}</Td>
                            <Td textAlign="center">
                              <IconButton
                                aria-label='Edit user'
                                colorScheme='gray'
                                variant='outline'
                                icon={<RiEditLine />}                
                              />                         
                            </Td>
                            <Td textAlign="center">
                              <IconButton
                                aria-label='Delete organization'
                                colorScheme='red'
                                variant='outline'
                                fontSize="20px"
                                icon={<MdDelete />}
                                onClick={() => openAlertDialog(user.user.Username, key)}                  
                              />                         
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <UserDialogDelete 
                    username={usernameState}
                    index={indexState}
                    isOpen={isAlertOpen}
                    onClose={onAlertClose}
                    cancelRef={cancelRef}
                    deleteUser={doDeleteUser}
                  ></UserDialogDelete>
                  
                </>      
              }
              <NewUserModal isOpen={isNewUserModalOpen} onClose={onNewUserModalClose}/>
          </div>
      </Flex>
    </>
  )
}

export default UsersTable