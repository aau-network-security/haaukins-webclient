import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrg } from '../../features/organizations/organizationSlice'
import UsersTable from '../users/UsersTable'

function OrgUsersTable() {
    const selectedOrg = useSelector((state) => state.org.selectedOrg)
    return (
        <Box 
        w="50%" 
        minWidth="400"
        h="650px"
        borderRadius="30px"
        className='container'
        marginRight="10px"
        >
        <UsersTable />
        </Box>
    )
}

export default OrgUsersTable