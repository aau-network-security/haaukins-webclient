import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, chakra, IconButton, Flex, Spacer, Center, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrgs, selectOrg } from '../../features/organizations/organizationSlice';
import LoadingSpin from 'react-loading-spin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import OrgDialogDelete from './OrgDialogDelete';
import ReactTooltip from 'react-tooltip';
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

function OrganizationsTable() {
  const IconFa = chakra(FontAwesomeIcon)

  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [orgNameState, setOrgNameState] = useState('')
  const onAlertClose = () => setIsAlertOpen(false)
  const cancelRef = React.useRef()
  const [indexState, setIndexState] = useState(0)

  const status = useSelector((state) => state.org.status)
  const error = useSelector((state) => state.org.error)
  const statusCode = useSelector((state) => state.org.statusCode)
  const orgs = useSelector((state) => state.org.organizations)
  const selectedOrg = useSelector((state) => state.org.selectedOrg)
  const dispatch = useDispatch()
  
  //Callback for alertDialog 
  // TODO write deleteOrg action, reducer, etc.
  const doDeleteOrg = (orgName) => {
    console.log("deleting org", orgName)
    dispatch(fetchOrgs())
  }
  
  useEffect(() => {
      dispatch(fetchOrgs())
  }, [dispatch])

  const setSelectedOrg = (org) => {
    console.log("setting selected org", org)
    dispatch(selectOrg(org))
  }

  const openAlertDialog = (orgName, index) => {
    setOrgNameState(orgName)
    setIndexState(index)
    setIsAlertOpen(true)
  }

  return (
    <>
      <Flex 
        w="100%" 
        h="400px"
        borderRadius="30px"
      >
          <div className='container'>
            <Flex className='container-header'>
              <h2 className='container-header-text'>Organizations</h2>
              <Spacer />
              <IconButton 
                className='container-header-button'
                colorScheme='green'
                variant='outline'
                icon={<Icon as={IoMdAdd}/>}
                data-tip="Add Organization"
                data-place="left"
                data-effect="solid"
                data-background-color="#211a52"
              />
              <ReactTooltip />
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
                            
              : Object.keys(orgs).length === 0 
              ?
              <Center>
                <h2>No organizations registered</h2>
              </Center>
              :
                <>
                  <TableContainer  overflowY="unset" height="325px">
                    <Table variant='simple'>
                      <Thead position="sticky" top={0} zIndex="docked" backgroundColor="white">
                        <Tr>
                          <Th textAlign="center">Name</Th>
                          <Th textAlign="center">Owner</Th>
                          <Th textAlign="center">Owner Email</Th>                      
                        </Tr>
                      </Thead>
                      <Tbody>
                        {Object.entries(orgs).map(([key, org]) => (
                          <Tr 
                            key={org.Name} 
                            _hover={{backgroundColor: "#211a525c", cursor: "pointer"}} 
                            onClick={() => setSelectedOrg(org)}
                            backgroundColor={!selectedOrg ? "" : selectedOrg.Name === org.Name ? "#211a525c" : ""  }
                          >
                            <Td textAlign="center">{org.Name}</Td>
                            <Td textAlign="center">{org.OwnerUser}</Td>
                            <Td textAlign="center">{org.OwnerEmail}</Td>
                            <Td textAlign="center">
                              <IconButton
                                aria-label='Delete organization'
                                colorScheme='red'
                                variant='outline'
                                icon={<IconFa icon={faTrash} color={"#b32525"}></IconFa>}
                                onClick={() => openAlertDialog(org.Name, key)}                  
                              />                         
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <OrgDialogDelete 
                    orgName={orgNameState}
                    index={indexState}
                    isOpen={isAlertOpen}
                    onClose={onAlertClose}
                    cancelRef={cancelRef}
                    deleteOrg={doDeleteOrg}
                  ></OrgDialogDelete>
                  
                </>      
              }
              {/* <NewAgentModal isOpen={isModalOpen} onClose={onModalClose}/> */}
          </div>
      </Flex>
    </>
    
  )
}

export default OrganizationsTable