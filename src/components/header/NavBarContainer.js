import React from "react";
import { chakra } from '@chakra-ui/react';
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from "../logo";
import { useDispatch } from "react-redux";
import userReducer from "../../features/user/userSlice";

const NavBarContainer = ({ children, ...props }) => {
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        {...props}
      >
        {children}
      </Flex>
    );
  };

export default NavBarContainer