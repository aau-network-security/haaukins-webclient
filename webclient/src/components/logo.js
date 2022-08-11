import React from "react"
import { Box } from "@chakra-ui/react"
import logoWhite from '../assets/dashboard-logo.png'
import logoBlue from '../assets/bluelogo.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      {props.white === "true" ? 
        <img src={logoWhite} alt="Logo" />
        :
        <img src={logoBlue} alt="Logo" />
      }
    </Box>
  )
}