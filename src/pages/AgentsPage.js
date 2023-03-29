import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AgentEnvironments from '../components/agents/AgentEnvironments'
import AgentMetrics from '../components/agents/AgentMetrics'
import AgentsTable from '../components/agents/AgentsTable'
import AgentUpdater from '../components/agents/AgentUpdater'

export default function AgentsPage() {
  const perms = useSelector((state) => state.user.loggedInUser.perms)
  console.log(perms)
  // Redirect if user accesses page directly via url and does not have permissions 
  // (This is mainly for usability, authorization is of course handled by the api)
  if (typeof perms !== 'undefined' ) {
    if ( typeof perms.agents === 'undefined' ) {
      return <Navigate to="/" replace />
    }
  }
  return (
    <Box w="100%" overflow='auto'>
      <Flex 
        p="0px 15px 0px 15px" 
        marginTop="1vh"
      >
        <AgentsTable />
      </Flex>
      
      <Flex
        p="0px 15px 0px 15px" 
        marginTop="1vh"
        overflowX="auto"
      >
        <AgentMetrics />
        <Spacer />
        <AgentEnvironments />
      </Flex>
      <Flex
        p="0px 15px 0px 15px" 
        marginTop="1vh"
      >
        <AgentUpdater />
      </Flex>
    </Box>
  )
}