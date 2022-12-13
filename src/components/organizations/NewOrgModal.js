import { Alert, AlertDescription, AlertIcon, Button, Center, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import LoadingSpin from 'react-loading-spin'
import { useDispatch, useSelector } from 'react-redux'
import { addOrg } from '../../features/organizations/organizationSlice'

function NewOrgModal({ isOpen, onClose }) {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.org.status)
    const [addOrgError, setAddOrgError] = useState('')
    const [reqData, setReqData] = useState ({
        orgName: '',
        orgOwner: {
            username: '',
            password: '',
            fullName: '',
            email: ''
        }
        
    })
    const submitForm = async (e) => {
        e.preventDefault()
        console.log('adding organization: ', reqData)
        try {
            const response = await dispatch(addOrg(reqData)).unwrap()
            console.log("org add response: ", response)
            setAddOrgError('')
            closeModal()
        }
        catch (err) {
            console.log(err)
            setAddOrgError(err.apiError.status)
        }
        
    }
    const changeHandler = (e) => {
        if (e.target.name === 'orgName'){
            setReqData({...reqData, [e.target.name]: e.target.value.trim()})
        } else if (e.target.name === 'username') {
            let orgOwner = reqData.orgOwner
            orgOwner.username = e.target.value.trim()
            setReqData({...reqData, orgOwner})
        } else if (e.target.name === 'password') {
            let orgOwner = reqData.orgOwner
            orgOwner.password = e.target.value.trim()
            setReqData({...reqData, orgOwner})
        } else if (e.target.name === 'fullName') {
            let orgOwner = reqData.orgOwner
            orgOwner.fullName = e.target.value.trim()
            setReqData({...reqData, orgOwner})
        } else if (e.target.name === 'email') {
            let orgOwner = reqData.orgOwner
            orgOwner.email = e.target.value.trim()
            setReqData({...reqData, orgOwner})
        }
        console.log(reqData)
    }
    const closeModal = () => {
        setAddOrgError('')
        onClose()
    }
    return (
    <>
        <Modal onClose={closeModal} isOpen={isOpen} scrollBehavior='inside' size="xl">
        <ModalOverlay />
        <ModalContent minH="450px">
            {status === 'adding'
            ?
                <Center
                    position="relative"
                    transform="translateY(170px)"
                >
                    <LoadingSpin
                    primaryColor="#211a52"
                    size="100px"
                    />
                </Center>
            :
            <>
                
                <form onSubmit={submitForm}>
                    <ModalHeader>Add organization</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                            <Stack
                            spacing={4}
                            p="1rem"
                            >   
                            {(addOrgError !== '')
                            ?
                                <Alert status='error'>
                                    <AlertIcon />
                                    <AlertDescription>{addOrgError}</AlertDescription>
                                </Alert>
                            // : (addOrgError !== '' && (addOrgError.includes("Invalid Authentication Key")))
                            // ?
                            //     <Alert status='error'>
                            //         <AlertIcon />
                            //         <AlertDescription>Error adding agent: Invalid authentication key</AlertDescription>
                            //     </Alert>
                            // : (addOrgError !== '' && (addOrgError.includes("signature is invalid")))
                            // ?
                            //     <Alert status='error'>
                            //         <AlertIcon />
                            //         <AlertDescription>Error adding agent: Invalid signature key</AlertDescription>
                            //     </Alert>
                            // : (addOrgError !== '' && (addOrgError.includes("authentication handshake failed")))
                            // ?
                            //     <Alert status='error'>
                            //         <AlertIcon />
                            //         <AlertDescription>Error adding agent: Agent does not support TLS</AlertDescription>
                            //     </Alert>
                            // : (addOrgError !== '' && (addOrgError.includes("connection refused")))
                            // ?
                            //     <Alert status='error'>
                            //         <AlertIcon />
                            //         <AlertDescription>Error adding agent: Connection refused</AlertDescription>
                            //     </Alert>
                            :
                                null
                            }
                                
                                <FormControl>
                                    <FormLabel>Organization name</FormLabel>
                                    <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <Input type="text" name="orgName" placeholder="Organization name" onChange={changeHandler} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl >
                                    <Center marginTop="20px" fontWeight="bold">
                                        <h1>Organization owner info <br/> </h1>
                                    </Center>
                                    <Center>
                                        <h2>(A new user will be created under the new organization)</h2>
                                    </Center>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <Input type="text" name="username" placeholder="Owner's new username" onChange={changeHandler} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <Input type="password" name="password" placeholder="Owner password (Leave blank to generate and email)" onChange={changeHandler} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Full name</FormLabel>
                                    <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                    />
                                    <Input type="text" name="fullName" placeholder="Owner's full name" onChange={changeHandler} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                        />
                                    <Input type="email" name="email" placeholder="Owner's email" onChange={changeHandler} />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                    
                    </ModalBody>
                    <ModalFooter>
                    <Button onClick={closeModal}>Close</Button>
                    <Spacer />
                    <Button 
                        type='submit' 
                        backgroundColor="#211a52"
                        color="white"
                        variant='solid'
                    >Submit</Button>
                    </ModalFooter>
                </form>
            </>
            }
        </ModalContent>
        </Modal>
    </>
    )
}

export default NewOrgModal