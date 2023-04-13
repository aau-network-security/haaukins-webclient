import {
    Alert,
    AlertDescription,
    AlertIcon,
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Spacer,
    Stack,
    Text,
    chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useSearchParams } from "react-router-dom";
import NewEventFormInputs from "../components/events/NewEventFormInputs";
import NewEventFormChallengeSelector from "../components/events/NewEventFormChallengeSelector";
import { NavLink as ReactLink } from "react-router-dom";

function NewEventPage() {
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
        console.log(reqDataState);
        if (e.target.name === "eventName") {
            setReqDataState({ ...reqDataState, ["name"]: e.target.value.trim() });
        } else if (e.target.name === "eventTag") {
            setReqDataState({ ...reqDataState, ["tag"]: e.target.value.trim() });
        } else if (e.target.name === "secretKey") {
            setReqDataState({ ...reqDataState, ["secretKey"]: e.target.value.trim() });
        } else if (e.target.name === "expectedFinishDate") {
            setReqDataState({
                ...reqDataState,
                ["expectedFinishDate"]: e.target.value.trim(),
            });
        } else if (e.target.name === "dynamicScoring") {
            setReqDataState({ ...reqDataState, ["dynamicScoring"]: e.target.checked });
        } else if (e.target.name === "vmName") {
            setReqDataState({ ...reqDataState, ["vmName"]: e.target.value.trim() });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("reqDataState: ", reqDataState)
        var reqData = reqDataState
        if (reqData.type == "advanced") {
            reqData.type = 1
        } else {
            reqData.type = 0
        }
        console.log("Starting event with reqData: ", reqData)
    };
    return (
        <Flex
            flexDirection="column"
            width="90%"
            height="fit-content"
            backgroundColor="white"
            margin="auto"
            padding="30px"
        >
            <Box>
                <Text color="#211a52" fontSize="30px" marginBottom={10}>
                    Create new {searchParams.get("type")} event
                </Text>
                <form onSubmit={handleSubmit} style={{ height: "fit-content" }}>
                    <Flex flexDir="row">
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
                        >Back</Button>
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
