import { IconButton, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { FaStop } from 'react-icons/fa'

function EventsTable() {
  const events = [
    {name: "someName", url: "https://test.beta.haaukins.com", type: "Advanced", status: "Running", labsRunning: 10, teams: 20, maxLabs: 20, secretKey: "someSecret", createdBy: "mikkel", createdAt: "28/03/2023", finishesAt: "30/03/2023"},
    {name: "someName", url: "https://test.beta.haaukins.com", type: "Advanced", status: "Running", labsRunning: 10, teams: 20, maxLabs: 20, secretKey: "someSecret", createdBy: "mikkel", createdAt: "28/03/2023", finishesAt: "30/03/2023"},
    {name: "someName", url: "https://test.beta.haaukins.com", type: "Advanced", status: "Running", labsRunning: 10, teams: 20, maxLabs: 20, secretKey: "someSecret", createdBy: "mikkel", createdAt: "28/03/2023", finishesAt: "30/03/2023"},
    {name: "someName", url: "https://test.beta.haaukins.com", type: "Advanced", status: "Running", labsRunning: 10, teams: 20, maxLabs: 20, secretKey: "someSecret", createdBy: "mikkel", createdAt: "28/03/2023", finishesAt: "30/03/2023"},
    {name: "someName", url: "https://test.beta.haaukins.com", type: "Advanced", status: "Running", labsRunning: 10, teams: 20, maxLabs: 20, secretKey: "someSecret", createdBy: "mikkel", createdAt: "28/03/2023", finishesAt: "30/03/2023"},
  ]
  return (
    <TableContainer  overflowY="unset" minH="600px">
                  <Table variant='simple'>
                    <Thead position="sticky" top={0} zIndex="docked" backgroundColor="white">
                      <Tr>
                        <Th textAlign="center">Stop</Th>
                        <Th textAlign="center">Name</Th>
                        <Th textAlign="center">Goto</Th>
                        <Th textAlign="center">Status</Th>
                        <Th textAlign="center">Teams</Th>
                        <Th textAlign="center">Labs running</Th>
                        <Th textAlign="center">Max labs</Th>
                        <Th textAlign="center">Secret key</Th>
                        <Th textAlign="center">Created by</Th>
                        <Th textAlign="center">Created at</Th> 
                        <Th textAlign="center">Finishes at</Th>                
                      </Tr>
                    </Thead>
                    <Tbody>
                      {Object.entries(events).map(([key, event]) => (
                        <Tr
                          key={key} 
                          _hover={{backgroundColor: "#211a525c", cursor: "pointer"}} 
                          onClick={() => console.log("setting selected event")}
                          
                        >
                          <Td
                            textAlign={"center"}
                            position="relative"
                            zIndex="10"
                          >
                            <IconButton 
                            icon={<FaStop />}
                            />                    
                          </Td>
                          <Td textAlign="center">{event.name}</Td>
                          <Td textAlign="center">
                            <Link href={event.url} target="_blank" color="#54616e">Goto event</Link>
                          </Td>
                          <Td textAlign="center">
                            <Text 
                              color={event.status === "Running" ? "green" : "red"}
                            >
                            {event.status}  
                            </Text>
                                        
                          </Td>
                          <Td textAlign="center">{event.teams}</Td>

                          <Td textAlign="center">
                            {event.labsRunning}
                          </Td>
                          <Td textAlign="center">
                            {event.maxLabs}
                          </Td>
                          <Td textAlign="center">
                            {event.secretKey}
                          </Td>
                          <Td textAlign="center">
                              {event.createdBy}                   
                          </Td>
                          <Td textAlign="center">
                              {event.createdAt}                   
                          </Td>
                          <Td textAlign="center">
                              {event.finishesAt}                   
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
  )
}

export default EventsTable