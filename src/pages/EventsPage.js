import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Icon,
    Spacer,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCalendarPlus, FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { MdOutlinedFlag } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import CreateEventCard from "../components/events/CreateEventCard";
import AddChallengeCard from "../components/events/AddChallengeCard";
import EventsTable from "../components/events/EventsTable";

export default function EventsPage() {
    return (
        <Box w="100%" overflow="auto" padding="16px">
            
                <Box w="100%">
                  <Flex margin="auto" w="fit-content">
                      <CreateEventCard />
                      <Spacer marginLeft="100px" marginRight="100px"/>
                      <AddChallengeCard />
                  </Flex>
                </Box>
            

            <Box
                backgroundColor="white"
                w="100%"
                h="500px"
                marginTop="50px"
                borderRadius="10px"
                p="0px 15px 15px 15px"
            >
                <EventsTable />
            </Box>
        </Box>
    );
}
