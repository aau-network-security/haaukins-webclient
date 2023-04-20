import React from "react"
import { Box } from "@chakra-ui/react"
import logoWhite from '../assets/dashboard-logo.png'
import logoBlue from '../assets/bluelogo.png'

export default function Logo(props) {
  return (
    <Box size={props.size}>
      {props.white === "true" ? 
        <img className={props.className} src={logoWhite} alt="Logo" />
        :
        <img className={props.className} src={logoBlue} alt="Logo" />
      }
    </Box>
  )
}