import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function AgentEnvironments() {
  const selectedAgent = useSelector((state) => state.agent.selectedAgent)
  return (
    <Box 
      w="100%" 
      minWidth="500px"
      h="650px"
      borderRadius="30px"
      className='container'
      marginLeft="20px"
    >
        <Flex className='container-header'>
          <h2 className='container-header-text'>Environments</h2> 
          <Spacer />
          {selectedAgent !== null
          ?
          <h2 className='container-header-text'>Agent: {selectedAgent.name}</h2>
          :
          null
          }
          
        </Flex>
        <Center>
          <h2 className='container-header-text'>To be implemented</h2>
        </Center>
    </Box>
  )
}

export default AgentEnvironments