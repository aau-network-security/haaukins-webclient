import { Box, Button, Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegCalendarPlus, FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

function CreateEventCard({...props}) {
    const simpleDescription =
        "A simple event has less customization than advanced events. <br> Simple events are great for highschools and other similar events <br> that are not aimed at hardcore CTFers <br> NOTE. Only browser labs are available for this kind of event";
    const advancedDescription =
        "An advanced event features things such as dynamic scoring, <br> both VPN and browser labs and advanced challenge management. <br> Advanced events are great for large scale CTFs ";
    return (
        <Box
            backgroundColor="white"
            minWidth="400px"
            height="85px"
            borderRadius="10px"
            zIndex="1000"
        >
            <HStack h="100%">
                <Flex flexDir="row" w="60%">
                    <Center w="100%">
                        <Icon
                            as={FaRegCalendarPlus}
                            fontSize="30px"
                            color="#211a52"
                        />
                        <Flex flexDir="column" marginLeft="20px">
                            <Text fontWeight="bold">Create Event</Text>
                            <Text>Name, date, etc.</Text>
                        </Flex>
                    </Center>
                </Flex>

                <Flex flexDir="column" h="100%" w="40%">
                    <Button
                        backgroundColor="#211a52"
                        _hover={{ backgroundColor: "#18123a" }}
                        color="white"
                        borderRadius="0px 10px 0px 5px"
                        marginBottom="1px"
                        h="50%"
                    >
                        <Text position="absolute" left="20px">
                            Simple
                        </Text>
                        <Icon
                            position="absolute"
                            right="10px"
                            top="7px"
                            as={FaRegQuestionCircle}
                            fontSize="13px"
                            data-tooltip-html={simpleDescription}
                            data-tooltip-place="right"
                            data-tooltip-effect="solid"
                            data-tooltip-id="tooltip-add-simple"
                            data-tooltip-offset={15}
                        />
                        
                    </Button>
                    <Button
                        backgroundColor="#211a52"
                        _hover={{ backgroundColor: "#18123a" }}
                        color="white"
                        borderRadius="5px 0px 10px 0px"
                        marginTop="1px"
                        h="50%"
                    >
                        <Text position="absolute" left="20px">
                            Advanced
                        </Text>
                        <Icon
                            marginLeft="100px"
                            as={FaRegQuestionCircle}
                            fontSize="13px"
                            position="absolute"
                            right="10px"
                            top="7px"
                            data-tooltip-html={advancedDescription}
                            data-tooltip-place="right"
                            data-tooltip-effect="solid"
                            data-tooltip-id="tooltip-add-advanced"
                            data-tooltip-offset={15}
                        />
                        
                    </Button>
                </Flex>
            </HStack>
            <Tooltip id="tooltip-add-simple" />
            <Tooltip id="tooltip-add-advanced" />
        </Box>
    );
}

export default CreateEventCard;
