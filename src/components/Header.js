import React from "react";
import { chakra } from '@chakra-ui/react';
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from "./logo";

const Icon = chakra(FontAwesomeIcon);

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        className="nav-bar-logo"
        white="true"
        w="50px"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        {/* <MenuItem to="/challenges">Challenges </MenuItem>
        <MenuItem to="/profiles">Profiles </MenuItem> */}
        <MenuItem to="/users">Users </MenuItem>
        <MenuItem to="/events">Events </MenuItem>
        <MenuItem to="/login" isLast onClick={Logout}>
          <Icon icon={faRightFromBracket} />
        </MenuItem>
      </Stack>
    </Box>
  );
};


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const Logout = () => {
  localStorage.removeItem('token');
}


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

export default NavBar;