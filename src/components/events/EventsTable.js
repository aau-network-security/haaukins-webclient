import {
    Flex,
    IconButton,
    Link,
    Select,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";
import { FaStop } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Tooltip } from "react-tooltip";

function EventsTable() {
    const events = [
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
        {
            name: "someName",
            url: "https://test.beta.haaukins.com",
            type: "Advanced",
            status: "Running",
            labsRunning: 10,
            exercises: 35,
            teams: 20,
            maxLabs: 20,
            secretKey: "someSecret",
            createdBy: "mikkel",
            createdAt: "28/03/2023",
            finishesAt: "30/03/2023",
        },
    ];
    return (
        <>
            <Flex className="container-header" height="60px">
                <h2
                    style={{ margin: "auto" }}
                    className="container-header-text"
                >
                    Events
                </h2>
                <Spacer />
                <Text margin="auto" marginRight="15px">
                    Show by status:
                </Text>
                <Select margin="auto" width="200px" defaultValue={"running"}>
                    <option value="all">All</option>
                    <option value="running">Running</option>
                    <option value="finished">Finished</option>
                </Select>
            </Flex>
            <TableContainer overflowY="unset" h="88%">
                <Table variant="simple">
                    <Thead
                        position="sticky"
                        top={0}
                        zIndex="100"
                        backgroundColor="white"
                    >
                        <Tr>
                            <Th textAlign="center">Restart/Stop</Th>
                            <Th textAlign="center">Name</Th>
                            <Th textAlign="center">Type</Th>
                            <Th textAlign="center">Goto</Th>
                            <Th textAlign="center">Status</Th>
                            <Th textAlign="center">Teams</Th>
                            <Th textAlign="center">Exercises</Th>
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
                                _hover={{
                                    backgroundColor: "#211a525c",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    console.log("setting selected event")
                                }
                            >
                                <Td
                                    textAlign={"center"}
                                    position="relative"
                                    zIndex="10"
                                >
                                    <IconButton icon={<FaStop />} />
                                </Td>
                                <Td textAlign="center">{event.name}</Td>
                                <Td textAlign="center">{event.type}</Td>
                                <Td textAlign="center">
                                    <Link
                                        href={event.url}
                                        target="_blank"
                                        color="#54616e"
                                    >
                                        Goto event
                                    </Link>
                                </Td>
                                <Td textAlign="center">
                                    <Text
                                        color={
                                            event.status === "Running"
                                                ? "green"
                                                : "red"
                                        }
                                    >
                                        {event.status}
                                    </Text>
                                </Td>
                                <Td textAlign="center">{event.teams}</Td>
                                <Td textAlign="center">{event.exercises}</Td>
                                <Td textAlign="center">{event.labsRunning}</Td>
                                <Td textAlign="center">{event.maxLabs}</Td>
                                <Td textAlign="center">{event.secretKey}</Td>
                                <Td textAlign="center">{event.createdBy}</Td>
                                <Td textAlign="center">{event.createdAt}</Td>
                                <Td textAlign="center">{event.finishesAt}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default EventsTable;
