import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AgentEvents from '../components/agents/AgentEvents'
import AgentMetrics from '../components/agents/AgentMetrics'
import AgentsTable from '../components/agents/AgentsTable'

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
    <Box w="100%">
      <Flex p="10px 10px 10px 10px">
        <AgentsTable />
      </Flex>
      
      <Flex>
        <AgentMetrics />
        <Spacer />
        <AgentEvents />
      </Flex>
    </Box>
  )
}