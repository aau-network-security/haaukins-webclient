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
import { deleteAgent, fetchAgents, reconnectAgent, selectAgent } from '../../features/agents/agentSlice'
import AgentDialogDelete from './AgentDialogDelete'
import { Tooltip } from 'react-tooltip'
import NewAgentModal from './NewAgentModal'

function AgentsTable() {
  const IconFa = chakra(FontAwesomeIcon)
  
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const onAlertClose = () => setIsAlertOpen(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onModalClose = () => setIsModalOpen(false)

  const [agentNameState, setAgentNameState] = useState('')
  const [indexState, setIndexState] = useState(0)
  
  const cancelRef = React.useRef()

  const status = useSelector((state) => state.agent.status)
  const error = useSelector((state) => state.agent.error)
  const statusCode = useSelector((state) => state.agent.statusCode)
  const agents = useSelector((state) => state.agent.agents)
  const selectedAgent = useSelector((state) => state.agent.selectedAgent)
  const dispatch = useDispatch()
  //Callback for alertDialog 
  // TODO write deleteOrg action, reducer, etc.
  // TODO Add weight to table
  const doDeleteAgent = (agentName, index) => {
    console.log("deleting agent", agentName)
    let agent = {
      id: index,
      name: agentName
    }
    dispatch(deleteAgent(agent))
  }

  const setSelectedAgent = (agent) => {
    console.log("setting selected agent", agent)
    dispatch(selectAgent(agent))
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

  const openAlertDialog = (agentName, index) => {
    console.log(agentName)
    setAgentNameState(agentName)
    setIndexState(index)
    setIsAlertOpen(true)
  }

  const openModal = () => {
    setIsModalOpen(true)
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
            <h2 className='container-header-text'>Agents</h2>
            <Spacer />
            <IconButton 
              className='container-header-button'
              colorScheme='green'
              variant='outline'
              icon={<Icon as={IoMdAdd}/>}
              data-tooltip-content="Add Agent"
              data-tooltip-place="left"
              data-tooltip-effect="solid"
              data-tooltip-id='tooltip-add-agent'
              onClick={openModal}
            />
            <Tooltip 
              id={"tooltip-add-agent"}
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
                          
            : Object.keys(agents).length === 0 
            ?
            <Center>
              <h2>No agents registered</h2>
            </Center>
            :
              <>
                <TableContainer  overflowY="unset" height="325px">
                  <Table variant='simple'>
                    <Thead position="sticky" top={0} zIndex="docked" backgroundColor="white">
                      <Tr>
                        <Th textAlign="center">Reconnect</Th>
                        <Th textAlign="center">Name</Th>
                        <Th textAlign="center">Connected</Th>
                        <Th textAlign="center">Weight</Th>
                        <Th textAlign="center">Url</Th>
                        <Th textAlign="center">TLS</Th>
                        <Th textAlign="center">State locked</Th>
                        <Th textAlign="center">Delete</Th>                        
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Object.entries(agents).map(([key, agent]) => (
                        <Tr 
                          key={agent.name} 
                          _hover={{backgroundColor: "#211a525c", cursor: "pointer"}} 
                          onClick={() => setSelectedAgent(agent)}
                          backgroundColor={!selectedAgent ? "" : selectedAgent.name === agent.name ? "#211a525c" : ""  }
                        >
                          <Td 
                            alignContent={"center"}
                            position="relative"
                            zIndex="10"
                          >
                            <Center
                              
                            >
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
                          <Td textAlign="center">{agent.weight}</Td>

                          <Td textAlign="center">{agent.url}</Td>
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
                          <Td textAlign="center">
                            <IconButton
                              aria-label='Delete organization'
                              colorScheme='red'
                              variant='outline'
                              icon={<IconFa icon={faTrash} color={"#b32525"}></IconFa>}
                              onClick={() => openAlertDialog(agent.name, key)}                  
                            />                         
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <AgentDialogDelete 
                  agentName={agentNameState}
                  index={indexState}
                  isOpen={isAlertOpen}
                  onClose={onAlertClose}
                  cancelRef={cancelRef}
                  deleteAgent={doDeleteAgent}
                ></AgentDialogDelete>
                
              </>      
            }
            <NewAgentModal isOpen={isModalOpen} onClose={onModalClose}/>
        </div>
    </Flex>
      
    </>
  )
}

export default AgentsTable