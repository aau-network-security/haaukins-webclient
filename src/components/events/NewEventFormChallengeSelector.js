import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function NewEventFormChallengeSelector({ reqData, changeHandler, setReqDataState }) {
  return (
    <Flex
        width="60%"
        marginLeft="20px"
        height="inherit"
    >
        <Box
            backgroundColor="#f7fafc"
            height="inherit"
            width="30%"
            marginRight="10px"
            borderRadius="5px"
        >
        </Box>
        <Box
            backgroundColor="#f7fafc"
            height="inherit"
            width="70%"
            borderRadius="5px"
        >
        </Box>
    </Flex>
  )
}

export default NewEventFormChallengeSelector