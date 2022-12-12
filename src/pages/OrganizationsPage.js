import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AgentEvents from '../components/agents/AgentEvents'
import AgentMetrics from '../components/agents/AgentMetrics'
import AgentsTable from '../components/agents/AgentsTable'
import AgentUpdater from '../components/agents/AgentUpdater'
import OrganizationsTable from '../components/organizations/OrganizationsTable'
export default function OrganizationsPage() {
  const perms = useSelector((state) => state.user.loggedInUser.perms)
  console.log(perms)
  // Redirect if user accesses page directly via url and does not have permissions 
  // (This is mainly for usability, authorization is of course handled by the api)
  if (typeof perms !== 'undefined' ) {
    if ( typeof perms.organizations === 'undefined' ) {
      return <Navigate to="/" replace />
    }
  }
  return (
    <>
      <Box w="100%">
        <Flex 
          p="0px 15px 0px 15px" 
          marginTop="1vh"
        >
          <OrganizationsTable />
        </Flex>
        
        <Flex
          p="0px 15px 0px 15px" 
          marginTop="1vh"
          overflowX="auto"
        >
          <AgentMetrics />
          <Spacer />
          <AgentEvents />
        </Flex>
        <Flex
          p="0px 15px 0px 15px" 
          marginTop="1vh"
        >
          <AgentUpdater />
        </Flex>
      </Box>
      
    </>
          
  )
}


