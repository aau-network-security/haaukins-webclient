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
    Stack,
    Text,
    chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

function NewEventFormInputs({ reqData, changeHandler, setReqDataState }) {
    return (
        <Box width="40%">
            <FormControl marginBottom={7} isRequired>
                <FormLabel fontSize="17px" color="#211a52">
                    Event name (Max: 20)
                </FormLabel>
                <InputGroup>
                    <Input
                        type="text"
                        name="eventName"
                        placeholder="Event name"
                        backgroundColor="#f7fafc"
                        borderColor="#edf3f8"
                        focusBorderColor="#c8dcea"
                        maxLength="20"
                        onChange={(event) => changeHandler(event)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl marginBottom={7} isRequired>
                <FormLabel fontSize="17px" color="#211a52">
                    Event tag (Max: 15)
                    <Icon
                        position="relative"
                        top="-5px"
                        marginLeft={1}
                        as={FaRegQuestionCircle}
                        fontSize="13px"
                        data-tooltip-html={
                            'The tag will will be used to access the event. <br> Your event will be accessible at "https://&ltevent tag&gt.haaukins.com"'
                        }
                        data-tooltip-place="right"
                        data-tooltip-effect="solid"
                        data-tooltip-id="tooltip-event-tag"
                        data-tooltip-offset={15}
                    />
                </FormLabel>
                <InputGroup>
                    <Input
                        type="text"
                        name="eventTag"
                        placeholder="Event tag"
                        backgroundColor="#f7fafc"
                        borderColor="#edf3f8"
                        focusBorderColor="#c8dcea"
                        maxLength="15"
                        onChange={(event) => changeHandler(event)}
                    />
                </InputGroup>
                <Text color={"#211a52"} marginTop="10px">
                    Event will be available at: https://
                    <b>{reqData.tag}</b>.haaukins.com
                </Text>
            </FormControl>
            <FormControl marginBottom={7}>
                <FormLabel fontSize="17px" color="#211a52">
                    Secret key
                    <Icon
                        position="relative"
                        top="-5px"
                        marginLeft={1}
                        as={FaRegQuestionCircle}
                        fontSize="13px"
                        data-tooltip-html={
                            "Participants will have to provide the secret key on event sign up.<br> Leave blank to disable."
                        }
                        data-tooltip-place="right"
                        data-tooltip-effect="solid"
                        data-tooltip-id="tooltip-secret-key"
                        data-tooltip-offset={15}
                    />
                </FormLabel>
                <InputGroup>
                    <Input
                        type="text"
                        name="secretKey"
                        placeholder="Secret key"
                        backgroundColor="#f7fafc"
                        borderColor="#edf3f8"
                        focusBorderColor="#c8dcea"
                        maxLength="10"
                        onChange={(event) => changeHandler(event)}
                    />
                </InputGroup>
            </FormControl>
            <Flex width="100%">
                <FormControl marginBottom={7} marginRight="20px">
                    <FormLabel fontSize="17px" color="#211a52">
                        Max labs
                        <Icon
                            position="relative"
                            top="-5px"
                            marginLeft={1}
                            as={FaRegQuestionCircle}
                            fontSize="13px"
                            data-tooltip-html={
                                "Maximum amount of labs that can be running at the same time for event. <br> When the maximum number of labs has been reached, <br>users can still register and solve challenges which do not require a lab."
                            }
                            data-tooltip-place="right"
                            data-tooltip-effect="solid"
                            data-tooltip-id="tooltip-max-labs"
                            data-tooltip-offset={15}
                        />
                    </FormLabel>
                    <InputGroup display="block">
                        <NumberInput
                            backgroundColor="#f7fafc"
                            borderColor="#edf3f8"
                            focusBorderColor="#c8dcea"
                            onChange={(value) =>
                                setReqDataState({
                                    ...reqData,
                                    ["maxLabs"]: Number(value),
                                })
                            }
                            value={reqData.maxLabs}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </InputGroup>
                </FormControl>
                <FormControl marginBottom={7}>
                    <FormLabel fontSize="17px" color="#211a52">
                        Team size
                        <Icon
                            position="relative"
                            top="-5px"
                            marginLeft={1}
                            as={FaRegQuestionCircle}
                            fontSize="13px"
                            data-tooltip-html={
                                "When team size is greater than 1, each team will have access to the corresponding number of VMs/VPN configs. <br> The team is still operating on the same lab and if a browser lab is chosen they can share files across all of their VMs"
                            }
                            data-tooltip-place="right"
                            data-tooltip-effect="solid"
                            data-tooltip-id="tooltip-team-size"
                            data-tooltip-offset={15}
                        />
                    </FormLabel>
                    <InputGroup display="block">
                        <NumberInput
                            backgroundColor="#f7fafc"
                            borderColor="#edf3f8"
                            focusBorderColor="#c8dcea"
                            onChange={(value) =>
                                setReqDataState({
                                    ...reqData,
                                    ["teamSize"]: Number(value),
                                })
                            }
                            value={reqData.teamSize}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </InputGroup>
                </FormControl>
            </Flex>
            <FormControl marginBottom={7}>
                <FormLabel fontSize="17px" color="#211a52">
                    Virtual machine
                </FormLabel>
                <InputGroup width="100%" display="block">
                    <Select
                        name="vmName"
                        defaultValue={"kali-v1-0-3"}
                        onChange={(event) => changeHandler(event)}
                        backgroundColor="#f7fafc"
                        borderColor="#edf3f8"
                        focusBorderColor="#c8dcea"
                    >
                        {/* TODO get vms available from daemon*/}
                        <option value={"kali-v1-0-3"}>Kali v1.0.3</option>
                        <option value={"kali-v1-0-4"}>Kali v1.0.4</option>
                    </Select>
                </InputGroup>
            </FormControl>
            <FormControl marginBottom={7} isRequired>
                <FormLabel fontSize="17px" color="#211a52">
                    Finish date
                    <Icon
                        position="relative"
                        top="-5px"
                        marginLeft={1}
                        as={FaRegQuestionCircle}
                        fontSize="13px"
                        data-tooltip-html={
                            "When this date and time has passed, event will automatically close. <br> You can extend the event duration on the events page"
                        }
                        data-tooltip-place="right"
                        data-tooltip-effect="solid"
                        data-tooltip-id="tooltip-finish-date"
                        data-tooltip-offset={15}
                    />
                </FormLabel>
                <InputGroup>
                    <Input
                        type="datetime-local"
                        name="expectedFinishDate"
                        placeholder="End date"
                        backgroundColor="#f7fafc"
                        borderColor="#edf3f8"
                        focusBorderColor="#c8dcea"
                        maxLength="10"
                        onChange={(event) => changeHandler(event)}
                    />
                </InputGroup>
            </FormControl>
            {/* <Text
                                fontSize="20px"
                                color="#211a52"
                                marginBottom={5}
                                marginTop={10}
                            >
                                Advanced options
                            </Text> */}
            <FormControl marginBottom={7}>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Checkbox
                        isChecked={reqData.dynamicScoring}
                        name="dynamicScoring"
                        onChange={(event) => changeHandler(event)}
                        marginBottom={3}
                    >
                        Enable dynamic scoring
                        <Icon
                            position="relative"
                            top="-5px"
                            marginLeft={1}
                            as={FaRegQuestionCircle}
                            fontSize="13px"
                            data-tooltip-html={
                                "When dynamic scoring is enabled, the score of the challenges change <br> depending on the amount of solves each challenge has."
                            }
                            data-tooltip-place="right"
                            data-tooltip-effect="solid"
                            data-tooltip-id="tooltip-dynamic-scoring"
                            data-tooltip-offset={15}
                        />
                    </Checkbox>
                    {reqData.dynamicScoring && (
                        <Flex>
                            <FormControl marginRight="20px">
                                <FormLabel fontSize="17px" color="#211a52">
                                    Max score
                                    <Icon
                                        position="relative"
                                        top="-5px"
                                        marginLeft={1}
                                        as={FaRegQuestionCircle}
                                        fontSize="13px"
                                        data-tooltip-html={
                                            "Max Score: The maximum score a challenge can have."
                                        }
                                        data-tooltip-place="right"
                                        data-tooltip-effect="solid"
                                        data-tooltip-id="tooltip-dynamic-scoring-max"
                                        data-tooltip-offset={15}
                                    />
                                </FormLabel>
                                <InputGroup display="block">
                                    <NumberInput
                                        backgroundColor="#f7fafc"
                                        borderColor="#edf3f8"
                                        focusBorderColor="#c8dcea"
                                        onChange={(value) =>
                                            setReqDataState({
                                                ...reqData,
                                                ["dynamicMax"]: Number(value),
                                            })
                                        }
                                        value={reqData.dynamicMax}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </InputGroup>
                            </FormControl>
                            <FormControl marginRight="20px">
                                <FormLabel fontSize="17px" color="#211a52">
                                    Min score
                                    <Icon
                                        position="relative"
                                        top="-5px"
                                        marginLeft={1}
                                        as={FaRegQuestionCircle}
                                        fontSize="13px"
                                        data-tooltip-html={
                                            "Minimum score: Is the minimum score a challenge can give when the solve threshold has been reached"
                                        }
                                        data-tooltip-place="right"
                                        data-tooltip-effect="solid"
                                        data-tooltip-id="tooltip-dynamic-scoring-min"
                                        data-tooltip-offset={15}
                                    />
                                </FormLabel>
                                <InputGroup display="block">
                                    <NumberInput
                                        backgroundColor="#f7fafc"
                                        borderColor="#edf3f8"
                                        focusBorderColor="#c8dcea"
                                        onChange={(value) =>
                                            setReqDataState({
                                                ...reqData,
                                                ["dynamicMin"]: Number(value),
                                            })
                                        }
                                        value={reqData.dynamicMin}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </InputGroup>
                            </FormControl>
                            <FormControl width="150%">
                                <FormLabel fontSize="17px" color="#211a52">
                                    Solve Threshold
                                    <Icon
                                        position="relative"
                                        top="-5px"
                                        marginLeft={1}
                                        as={FaRegQuestionCircle}
                                        fontSize="13px"
                                        data-tooltip-html={
                                            "Solve threshold: The number of solves at which the challenge will reach the minimum score."
                                        }
                                        data-tooltip-place="right"
                                        data-tooltip-effect="solid"
                                        data-tooltip-id="tooltip-dynamic-scoring-solve-threshold"
                                        data-tooltip-offset={15}
                                    />
                                </FormLabel>
                                <InputGroup display="block">
                                    <NumberInput
                                        backgroundColor="#f7fafc"
                                        borderColor="#edf3f8"
                                        focusBorderColor="#c8dcea"
                                        onChange={(value) =>
                                            setReqDataState({
                                                ...reqData,
                                                ["dynamicSolveThreshold"]:
                                                    Number(value),
                                            })
                                        }
                                        value={reqData.dynamicSolveThreshold}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </InputGroup>
                            </FormControl>
                        </Flex>
                    )}
                </InputGroup>
            </FormControl>

            {/* <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                backgroundColor="#211a52"
                                color="white"
                                width="full"
                            >
                                Login
                            </Button> */}
        </Box>
    );
}

export default NewEventFormInputs;
