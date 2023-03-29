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

function EventTeamsTable() {
    const teams = [
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
        {
            name: "someName",
            email: "someEmail",
            status: "In queue",
        },
    ];
    return (
        <>
            <Flex className="container-header" height="60px">
                <h2
                    style={{ margin: "auto", marginLeft: "0" }}
                    className="container-header-text"
                >
                    Teams
                </h2>
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
                            <Th textAlign="center">Teamname</Th>
                            <Th textAlign="center">Email</Th>
                            <Th textAlign="center">Status</Th>
                            <Th textAlign="center">Reset lab</Th>
                            <Th textAlign="center">Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.entries(teams).map(([key, team]) => (
                            <Tr
                                key={key}
                            >
                                <Td textAlign="center">{team.name}</Td>
                                <Td textAlign="center">
                                    {/*Make link */}
                                    {team.email}
                                </Td>
                                <Td textAlign="center">
                                    <Text>
                                        {team.status}
                                    </Text>
                                </Td>
                                <Td textAlign="center"></Td>

                                <Td textAlign="center"></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default EventTeamsTable;
