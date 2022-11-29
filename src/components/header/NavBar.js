import React from "react"
import Logo from "../Logo"
import { Link } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks"
import MenuToggle from "./MenuToggle"
import NavBarContainer from "./NavBarContainer"





const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <NavBarContainer {...props}>
      <Link href="/">
        <Logo
          className="nav-bar-logo"
          white="true"
          w="50px"
        />
      </Link>
      
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};














export default NavBar;