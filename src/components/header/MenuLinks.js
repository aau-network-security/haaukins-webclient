import React from "react";
import { chakra } from '@chakra-ui/react';
import { Box, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import MenuItem from "./MenuItem"

const MenuLinks = ({ isOpen }) => {
  const dispatch = useDispatch()
  const Icon = chakra(FontAwesomeIcon);
  const logout = () => {
    dispatch(logoutUser())
  }
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
          {/*<MenuItem to="/">Home</MenuItem>*/}
          {/* <MenuItem to="/challenges">Challenges </MenuItem>
          <MenuItem to="/profiles">Profiles </MenuItem> */}
          <MenuItem to="/events">Events </MenuItem>
          <MenuItem to="/challenges">Challenges</MenuItem>
          <MenuItem to="/organizations">Organizations </MenuItem>
          <MenuItem to="/agents">Agents </MenuItem>
          <MenuItem to="/settings">Platform Settings</MenuItem>
          <MenuItem to="/profile">Profile</MenuItem>
          <MenuItem to="/login" isLast onClick={logout}>
            <Icon icon={faRightFromBracket} />
          </MenuItem>
        </Stack>
      </Box>
    );
  };

export default MenuLinks