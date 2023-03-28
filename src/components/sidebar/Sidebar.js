import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Icon,
    MenuButton,
    Menu
} from '@chakra-ui/react'
import {
    FiCalendar,
    FiLogOut,
    FiSettings
} from 'react-icons/fi'
import { FaRegBuilding, FaNetworkWired, FaUsers } from 'react-icons/fa'
import { MdOutlinedFlag } from 'react-icons/md'
import { RiDashboardLine, RiUserSettingsLine } from 'react-icons/ri'
import NavItem from './NavItem'
import Logo from '../Logo'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/users/userSlice'

// TODO new logos
export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small") // Used for the menu buttom which is also commented out below
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser())
    }
    const loggedInUser = useSelector((state) => state.user.loggedInUser)

    return (
        <Flex
            backgroundColor="white"
            pos="sticky"
            h="98vh"
            marginTop="1vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "250px"}
            flexDir="column"
            justifyContent="space-between"
            zIndex="1000"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >   
                <Logo white="false"></Logo>
                {/* <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                /> */}
                <NavItem navSize={navSize} icon={RiDashboardLine} title="Dashboard" to="/" />
                <NavItem navSize={navSize} icon={FiCalendar} title="Events" to="/events" />
                <NavItem navSize={navSize} icon={MdOutlinedFlag} title="Challenges" to="/challenges" />
                {typeof loggedInUser.perms !== "undefined" 
                &&
                    <>
                        {typeof loggedInUser.perms.organizations !== "undefined" && <NavItem navSize={navSize} icon={FaRegBuilding} title="Organizations" to="/organizations" />}
                    </>
                }
                {typeof loggedInUser.perms !== "undefined" 
                &&
                    <>
                        {typeof loggedInUser.perms.agents !== "undefined" && <NavItem navSize={navSize} icon={FaNetworkWired} title="Agents" to="/agents"/>}
                    </>
                }
                {typeof loggedInUser.perms !== "undefined" 
                &&
                    <>
                        {(typeof loggedInUser.perms.users !== "undefined" && loggedInUser.user.Role !== 'role::superadmin') && <NavItem navSize={navSize} icon={FaUsers} title="Users" to="/users" />}
                    </>
                }
                <NavItem navSize={navSize} icon={RiUserSettingsLine} title="Profile" to="/profile" />
                {typeof loggedInUser.perms !== "undefined" 
                &&
                    <>
                        {typeof loggedInUser.perms.settings !== "undefined" && <NavItem navSize={navSize} icon={FiSettings} title="Settings" to="/settings"/>}
                    </>
                }     
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                <NavItem navSize={navSize} icon={FiLogOut} title="Logout" to="/login" customClickEvent={logout}/>
                {/* <Menu placement="right" p={"12px 12px 5px 12px"} _hover={{ textDecor: 'none', backgroundColor: "#211a52", color: "#FFF"}} >
                    <MenuButton w="100%" lineHeight={1.35} >
                        <Flex>
                            <Icon as={FiLogOut} fontSize="xl" />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>Logout</Text>
                        </Flex>
                    </MenuButton>
                </Menu> */}
                </Flex>
            </Flex>
        </Flex>
    )
}