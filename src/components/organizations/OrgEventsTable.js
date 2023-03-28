import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import EventsTable from '../events/EventsTable'

function OrgEventsTable() {
    const selectedOrg = useSelector((state) => state.org.selectedOrg)
    return (
        <Box 
            w="50%" 
            minWidth="400"
            h="650px"
            borderRadius="30px"
            className='container'
            marginLeft="10px"
        >
            <Flex className='container-header' w="100%">
                <h2 className='container-header-text'>Events</h2> 
                <Spacer />
                {selectedOrg !== null
                ?
                <h2 className='container-header-text'>Organization: {selectedOrg.Name}</h2>
                :
                null
                }
                
            </Flex>
            {/* <EventsTable /> */}
        </Box>
    )
}

export default OrgEventsTable