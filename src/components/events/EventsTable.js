import {
  Center,
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
import React, { useEffect, useState } from "react";
import { FaStop, FaPlay } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import LoadingSpin from "react-loading-spin";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { fetchEvents, selectEvent } from "../../features/events/eventSlice";

function EventsTable() {
  const eventState = useSelector((state) => state.event);
  const selectedEvent = useSelector((state) => state.event.selectedEvent);
  const [eventStatusSelector, setEventStatusSelector] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    setEventStatusSelector(event.target.value);
  };

  const setSelectedEvent = (event) => {
    console.log("setting selected event", event);
    dispatch(selectEvent(event));
  };

  useEffect(() => {
    if (eventStatusSelector != "all") {
      dispatch(fetchEvents({ status: eventStatusSelector }));
    } else {
      dispatch(fetchEvents());
    }
  }, [eventStatusSelector]);
  return (
    <>
      <Flex className="container-header" height="60px">
        <h2 style={{ margin: "auto" }} className="container-header-text">
          Events
        </h2>
        <Spacer />
        <Text margin="auto" marginRight="15px">
          Show by status:
        </Text>
        <Select
          margin="auto"
          width="200px"
          defaultValue={0}
          onChange={(event) => handleChange(event)}
        >
          <option value={"all"}>All</option>
          <option value={0}>Running</option>
          <option value={2}>Finished</option>
        </Select>
      </Flex>
      {eventState.status === "fetchingEvents" ? (
        <Center position="relative" transform="translateY(100%)">
          <LoadingSpin primaryColor="#211a52" size="100px" />
        </Center>
      ) : (
        <TableContainer overflowY="unset" h="88%">
          <Table variant="simple">
            <Thead
              position="sticky"
              top={0}
              zIndex="100"
              backgroundColor="white"
            >
              <Tr>
                <Th textAlign="center">Action</Th>
                <Th textAlign="center">Name</Th>
                <Th textAlign="center">Type</Th>
                <Th textAlign="center">Goto</Th>
                <Th textAlign="center">Secret key</Th>
                <Th textAlign="center">Status</Th>
                <Th textAlign="center">Teams</Th>
                <Th textAlign="center">Exercises</Th>
                <Th textAlign="center">Labs running</Th>
                <Th textAlign="center">Max labs</Th>
                <Th textAlign="center">Created by</Th>
                <Th textAlign="center">Created at</Th>
                <Th textAlign="center">Finishes/Finished at</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(eventState.events).map(([key, event]) => (
                <Tr
                  key={key}
                  _hover={{
                    backgroundColor: "#211a525c",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedEvent(event)}
                  backgroundColor={
                    !selectedEvent
                      ? ""
                      : selectedEvent.tag === event.tag
                      ? "#211a525c"
                      : ""
                  }
                >
                  <Td textAlign={"center"} position="relative" zIndex="10">
                    {event.status === "running" ? (
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<FaStop />}
                        data-tooltip-content="Stop event"
                        data-tooltip-place="right"
                        data-tooltip-effect="solid"
                        data-tooltip-id="tooltip-stop-event"
                      />
                    ) : (
                      <>
                        <IconButton
                          colorScheme="red"
                          variant="outline"
                          marginRight={"10px"}
                          fontSize="20px"
                          icon={<MdDelete />}
                          data-tooltip-content="Delete event"
                          data-tooltip-place="right"
                          data-tooltip-effect="solid"
                          data-tooltip-id="tooltip-delete-event"
                        />
                        <IconButton
                          colorScheme="green"
                          variant="outline"
                          icon={<FaPlay />}
                          data-tooltip-html="Restart event <br> Requires that another event is not running on the same URL"
                          data-tooltip-place="right"
                          data-tooltip-effect="solid"
                          data-tooltip-id="tooltip-restart-event"
                        />
                      </>
                    )}
                  </Td>
                  <Td textAlign="center">{event.name}</Td>
                  <Td textAlign="center">{event.type}</Td>
                  <Td textAlign="center">
                    <Link href={event.url} target="_blank" color="#54616e">
                      Goto event
                    </Link>
                  </Td>
                  <Td textAlign="center">{event.secretKey}</Td>
                  <Td textAlign="center">
                    <Text color={event.status === "running" ? "green" : "red"}>
                      {event.status}
                    </Text>
                  </Td>
                  <Td textAlign="center">{event.teams}</Td>
                  <Td textAlign="center">{event.exercises}</Td>
                  <Td textAlign="center">{event.labsRunning}</Td>
                  <Td textAlign="center">{event.maxLabs}</Td>
                  <Td textAlign="center">{event.createdBy}</Td>
                  <Td textAlign="center">{event.createdAt}</Td>
                  <Td textAlign="center">
                    {event.status === "running"
                      ? event.finishesAt
                      : event.finishedAt}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Tooltip id={"tooltip-stop-event"} style={{ zIndex: "9999" }} />
      <Tooltip id={"tooltip-restart-event"} style={{ zIndex: "9999" }} />
      <Tooltip id={"tooltip-delete-event"} style={{ zIndex: "9999" }} />
    </>
  );
}

export default EventsTable;
