import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from '@chakra-ui/react'


export default function AgentDialogDelete(props) {
    const onClickDelete = () => {
        props.deleteAgent(props.agentName)
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
                Delete Agent
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure you want to delete <b>{props.agentName}</b>?
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