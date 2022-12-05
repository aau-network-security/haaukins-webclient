import { Box, Button, Center, chakra, Flex, Icon, IconButton, Spacer, Tab, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import LoadingSpin from 'react-loading-spin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAgents, reconnectAgent } from '../../features/agents/agentSlice'
import AgentDialogDelete from './AgentDialogDelete'
import ReactTooltip from 'react-tooltip'

function AgentsTable() {
  const IconFa = chakra(FontAwesomeIcon)

  const [isOpen, setIsOpen] = useState(false)
  const [agentNameState, setAgentNameState] = useState('')
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const loading = useSelector((state) => state.agent.loading)
  const reconnectLoading = useSelector((state) => state.agent.reconnectLoading)
  const error = useSelector((state) => state.agent.error)
  const statusCode = useSelector((state) => state.agent.statusCode)
  const agents = useSelector((state) => state.agent.agents)
  const dispatch = useDispatch()
  
  //Callback for alertDialog 
  // TODO write deleteOrg action, reducer, etc.
  const deleteAgent = (agentName) => {
    console.log("deleting agent", agentName)
    dispatch(fetchAgents())
  }

  const reconnectToAgent = async (id ,agentName) => {
    console.log("reconnecting agent", agentName)
    try {
      let agent = {
        id: id,
        name: agentName
      }
      let resp = await dispatch(reconnectAgent(agent))
      console.log("resp", resp)
    }
    catch (err) {
      console.log("err", err)
    }
    
    
  }
  
  useEffect(() => {
      dispatch(fetchAgents())
  }, [dispatch])

  const openAlertDialog = (agentName) => {
    console.log(agentName)
    setAgentNameState(agentName)
    setIsOpen(true)
  }

  return (
    <>
    <Flex 
      w="100%" 
      h="400px"
      boxShadow="0 0 12px 5px rgba(0, 0, 0, 0.05)"
      borderRadius="30px"
    >
        <div className='table-container'>
          <Flex className='table-header'>
            <h2 className='table-header-text'>Agents</h2>
            <Spacer />
            <IconButton 
              className='table-header-button'
              colorScheme='green'
              variant='outline'
              icon={<Icon as={IoMdAdd}/>}
              data-tip="Add Agent"
              data-place="left"
              data-effect="solid"
              data-background-color="#211a52"
            />
            <ReactTooltip />
          </Flex>
      
          
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
                        <Th textAlign="center">Reconnect</Th>
                        <Th textAlign="center">Name</Th>
                        <Th textAlign="center">Connected</Th>
                        
                        <Th textAlign="center">Url</Th>
                        <Th textAlign="center">Sign-key</Th>
                        <Th textAlign="center">Auth-key</Th>
                        <Th textAlign="center">TLS</Th>
                        <Th textAlign="center">State locked</Th>
                        <Th textAlign="center">Active labs</Th>
                        <Th textAlign="center">Delete</Th>
                        
                        
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Object.entries(agents).map(([key, agent]) => (
                        <Tr key={agent.name} _hover={{backgroundColor: "#211a525c"}}>
                          <Td alignContent={"center"}>
                            <Center>
                              {/* TODO return a loading statement from daemon */}
                              {agent.loading
                              ?
                              
                              <IconButton
                                aria-label='Reconnect to agent'
                                variant='outline'
                                icon={<LoadingSpin
                                  primaryColor="#211a52"
                                  size="20px"
                                />}               
                              />
                              :
                              <IconButton
                                aria-label='Reconnect to agent'
                                variant='outline'
                                icon={<IoMdRefresh />}
                                onClick={() => reconnectToAgent(key, agent.name)}                  
                              />
                            }
                            
                            </Center>                            
                          </Td>
                          <Td textAlign="center">{agent.name}</Td>
                          <Td textAlign="center">
                            <Icon
                              as={agent.connected ? TiTick : RxCross2}
                              fontSize="xl"
                              color={agent.connected ? "green" : "#b32525"}
                            />                          
                          </Td>
                          <Td textAlign="center">{agent.url}</Td>
                          <Td textAlign="center">{agent.signKey}</Td>
                          <Td textAlign="center">{agent.authKey}</Td>
                          <Td textAlign="center">
                            <Icon
                              as={agent.tls ? TiTick : RxCross2}
                              fontSize="xl"
                              color={agent.tls ? "green" : "#b32525"}
                            />
                          </Td>
                          <Td textAlign="center">
                            <Icon
                              as={agent.stateLock ? TiTick : RxCross2}
                              fontSize="xl"
                              color={agent.stateLock ? "green" : "#b32525"}
                            />
                          </Td>
                          <Td textAlign="center">{agent.activeLabs}</Td>
                          <Td textAlign="center">
                            <IconButton
                              aria-label='Delete organization'
                              colorScheme='red'
                              variant='outline'
                              icon={<IconFa icon={faTrash} color={"#b32525"}></IconFa>}
                              onClick={() => openAlertDialog(agent.name)}                  
                            />                         
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <AgentDialogDelete 
                  agentName={agentNameState}
                  isOpen={isOpen}
                  onClose={onClose}
                  cancelRef={cancelRef}
                  deleteAgent={deleteAgent}
                ></AgentDialogDelete>
              </>      
            }
        </div>
    </Flex>
      
    </>
  )
}

export default AgentsTable