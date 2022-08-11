import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
    Flex,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    FormControl,
    InputRightElement,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
  } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Logo from "../components/logo"
import usersApi from "../api/usersApi";
import useApi from "../api/useApi";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function Home() {
    const loginUser = useApi(usersApi.login);
    
    const [showPassword, setShowPassword] = useState(false);
    const [internalServerError, setInternalServerError] = useState(false);
    const [incorrectCreds, setIncorrectCreds] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser.request(reqData);
    }
    
    useEffect(() => {
        if ( loginUser.data !== null) {
            if ( loginUser.data.status === "OK" ) {
                localStorage.setItem('token', loginUser.data.token);
                setLoggedIn(true)
                setIncorrectCreds(false)
                setInternalServerError(false)
            } else if ( loginUser.data.status === "incorrect username or password") {
                setInternalServerError(false);
                setIncorrectCreds(true);
            }
        }      
    }, [loginUser]);
    

    const [reqData, setData] = useState({
        username: '',
        password: ''
    });
    
    const changeHandler = (e) => {
        setData({...reqData, [e.target.name]: e.target.value})
    }

    return (
        <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        {loggedIn && (
            <Navigate to="/" replace={true} />
        )}
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
            <Logo white="false" marginBottom={10}></Logo>
            {internalServerError && 
                <Alert status='error'>
                    <AlertIcon />
                    <AlertDescription>Internal server error</AlertDescription>
                </Alert>
            }
            {incorrectCreds &&
                <Alert status='error'>
                <AlertIcon />
                <AlertDescription>Incorrect username or password</AlertDescription>
            </Alert>
            }
            <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" name="username" placeholder="username" onChange={changeHandler} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      onChange={changeHandler}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  backgroundColor="#211a52"
                  color="white"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  };