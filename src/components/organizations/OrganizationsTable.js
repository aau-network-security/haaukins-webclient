import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, chakra, IconButton } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrgs } from '../../features/organizations/organizationSlice';
import LoadingSpin from 'react-loading-spin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import OrgDialogDelete from './OrgDialogDelete';

function OrganizationsTable() {
  const Icon = chakra(FontAwesomeIcon)

  const [isOpen, setIsOpen] = useState(false)
  const [orgNameState, setOrgNameState] = useState('')
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const loading = useSelector((state) => state.org.loading)
  const error = useSelector((state) => state.org.error)
  const statusCode = useSelector((state) => state.org.statusCode)
  const orgs = useSelector((state) => state.org.organizations)
  const dispatch = useDispatch()
  
  //Callback for alertDialog 
  // TODO write deleteOrg action, reducer, etc.
  const deleteOrg = (orgName) => {
    console.log("deleting org", orgName)
    dispatch(fetchOrgs())
  }
  
  useEffect(() => {
      dispatch(fetchOrgs())
  }, [dispatch])

  const openAlertDialog = (orgName) => {
    setOrgNameState(orgName)
    setIsOpen(true)
  }

  return (
    <div>
      {loading === true 
      ? 
        <LoadingSpin
          primaryColor="#211a52"
        />
      :
        <>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner</Th>
                  <Th>Owner email</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {orgs.map(org => (
                  <Tr key={org.Name}>
                    <Td>{org.Name}</Td>
                    <Td>{org.OwnerUser}</Td>
                    <Td>{org.OwnerEmail}</Td>
                    <Td>
                      <IconButton
                        aria-label='Delete organization'
                        colorScheme='red'
                        variant='outline'
                        icon={<Icon icon={faTrash} color={"#b32525"}></Icon>}
                        onClick={() => openAlertDialog(org.Name)}                  
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              {/* <Tfoot>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner</Th>
                  <Th>Owner email</Th>
                  <Th>Delete</Th>
                </Tr>
              </Tfoot> */}
            </Table>
          </TableContainer>
          <OrgDialogDelete 
            orgName={orgNameState}
            isOpen={isOpen}
            onClose={onClose}
            cancelRef={cancelRef}
            deleteOrg={deleteOrg}
          ></OrgDialogDelete>
        </>      
      }
    </div>
    
  )
}

export default OrganizationsTable