import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from '@chakra-ui/react'


export default function AlertDialogDelete(props) {
    console.log(props)
    const onClickDelete = () => {
        props.deleteOrg(props.orgName)
        props.onClose()
    }
    return (
      <>  
        <AlertDialog
          isOpen={props.isOpen}
          leastDestructiveRef={props.cancelRef}
          onClose={props.onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Organization
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure you want to delete <b>{props.orgName}</b>? <br></br>It will delete all users, and close all related events connected to the organization.
                You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={props.cancelRef} onClick={props.onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={onClickDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }