import {
    Box,
    Button,
    Flex,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Tooltip } from "react-tooltip";
import { useNavigate, useSearchParams } from "react-router-dom";
import NewEventFormInputs from "../components/events/NewEventFormInputs";
import NewEventFormChallengeSelector from "../components/events/NewEventFormChallengeSelector";
import { NavLink as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/exercises/exerciseSlice";
import { createEvent } from "../features/events/eventSlice";

function NewEventPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const status = useSelector((state) => state.event.status);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const [searchParams, setSearchParams] = useSearchParams();

    const [reqDataState, setReqDataState] = useState({
        type: searchParams.get("type"),
        name: "",
        tag: "",
        teamSize: 1,
        maxLabs: 1,
        vmName: "kali-v1-0-3",
        exerciseTags: [],
        expectedFinishDate: "",
        dynamicScoring: false,
        dynamicMax: 1000,
        dynamicMin: 100,
        dynamicSolveThreshold: 100,
        secretKey: "",
    });

    const changeHandler = (e) => {
        console.log(e);
        console.log(reqDataState);
        if (e.target.name === "eventName") {
            setReqDataState({
                ...reqDataState,
                ["name"]: e.target.value.trim(),
            });
        } else if (e.target.name === "eventTag") {
            setReqDataState({
                ...reqDataState,
                ["tag"]: e.target.value.trim(),
            });
        } else if (e.target.name === "secretKey") {
            setReqDataState({
                ...reqDataState,
                ["secretKey"]: e.target.value.trim(),
            });
        } else if (e.target.name === "dynamicScoring") {
            setReqDataState({
                ...reqDataState,
                ["dynamicScoring"]: e.target.checked,
            });
        } else if (e.target.name === "vmName") {
            setReqDataState({
                ...reqDataState,
                ["vmName"]: e.target.value.trim(),
            });
        }
    };

    const toast = useToast();
    const toastIdRef = React.useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("reqDataState: ", reqDataState);
        var reqData = {
            type: reqDataState.type === "advanced" ? 1 : 0,
            name: reqDataState.name,
            tag: reqDataState.tag,
            teamSize: reqDataState.teamSize,
            maxLabs: reqDataState.maxLabs,
            vmName: "kali-v1-0-3",
            exerciseTags: reqDataState.exerciseTags,
            expectedFinishDate: reqDataState.expectedFinishDate.toISOString(),
            dynamicScoring: reqDataState.dynamicScoring,
            dynamicMax: reqDataState.dynamicMax,
            dynamicMin: reqDataState.dynamicMin,
            dynamicSolveThreshold: reqDataState.dynamicSolveThreshold,
            secretKey: reqDataState.secretKey,
        };

        // Convert type to number that daemon understands

        console.log("Starting event with reqData: ", reqData);

        if (reqData.exerciseTags.length === 0) {
            toastIdRef.current = toast({
                title: "No challenges selected",
                description: "Select some challenges to create an event",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        try {
            const response = await dispatch(createEvent(reqData)).unwrap();
            toastIdRef.current = toast({
                title: "Event successfully created",
                description: "The event was successfully created",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            navigate("/events")
        } catch (err) {
            console.log("got error starting exercise", err);
            toastIdRef.current = toast({
                title: "Error creating event",
                description: err.apiError.status,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    return (
        <Flex
            flexDirection="column"
            width="90%"
            height="fit-content"
            maxH="1000px"
            backgroundColor="white"
            margin="auto"
            padding="30px"
        >
            <Box height="100%">
                {status === "creatingEvent" ? (
                    <Flex
                        height={
                            searchParams.get("type") === "advanced"
                                ? "960px"
                                : "755px"
                        }
                        alignItems="center"
                        justifyContent="center"
                        flexDir="column"
                    >
                        <Text color="#211a52" fontSize="30px" marginBottom={10}>
                            Creating event
                        </Text>
                        <Logo size="200px" className="icon-spin" />
                    </Flex>
                ) : (
                    <>
                        <Text color="#211a52" fontSize="30px" marginBottom={10}>
                            Create new {searchParams.get("type")} event
                        </Text>
                        <form
                            onSubmit={handleSubmit}
                            style={{ height: "100%" }}
                        >
                            <Flex
                                flexDir="row"
                                height={
                                    searchParams.get("type") === "advanced"
                                        ? "755px"
                                        : "550px"
                                }
                            >
                                <NewEventFormInputs
                                    changeHandler={changeHandler}
                                    reqData={reqDataState}
                                    setReqDataState={setReqDataState}
                                />
                                <NewEventFormChallengeSelector
                                    changeHandler={changeHandler}
                                    reqData={reqDataState}
                                    setReqDataState={setReqDataState}
                                />
                            </Flex>
                            <Flex
                                width={"100%"}
                                marginTop="20px"
                                justifyContent={"center"}
                            >
                                <Button
                                    backgroundColor="#211a52"
                                    _hover={{ backgroundColor: "#18123a" }}
                                    color="white"
                                    as={ReactLink}
                                    to="/events"
                                    marginRight="30px"
                                >
                                    Back
                                </Button>
                                <Button
                                    backgroundColor="#5caf8d"
                                    _hover={{ backgroundColor: "#4c9a79" }}
                                    color="white"
                                    type="submit"
                                >
                                    Create event
                                </Button>
                            </Flex>
                        </form>
                    </>
                )}
            </Box>
            <Tooltip id="tooltip-event-tag" />
            <Tooltip id="tooltip-secret-key" />
            <Tooltip id="tooltip-max-labs" />
            <Tooltip id="tooltip-finish-date" />
            <Tooltip id="tooltip-dynamic-scoring" />
            <Tooltip id="tooltip-dynamic-scoring-max" />
            <Tooltip id="tooltip-dynamic-scoring-min" />
            <Tooltip id="tooltip-dynamic-scoring-solve-threshold" />
            <Tooltip id="tooltip-team-size" />
        </Flex>
    );
}

export default NewEventPage;
