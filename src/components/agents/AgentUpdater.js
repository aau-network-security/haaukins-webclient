import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function AgentUpdater() {
  const selectedAgent = useSelector((state) => state.agent.selectedAgent)
  return (
    <Box 
      w="100%" 
      h="400px"
      borderRadius="30px"
      className='container'
    >
       <Flex className='container-header'>
        {selectedAgent !== null
        ?
        <h2 className='container-header-text'>Update {selectedAgent.name}</h2>
        :
        <h2 className='container-header-text'>Update</h2>
        }
        
      </Flex>
      <Center>
          <h2 className='container-header-text'>To be implemented</h2>
      </Center>
    </Box>
  )
}

export default AgentUpdater