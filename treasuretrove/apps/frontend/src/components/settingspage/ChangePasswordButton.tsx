import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";

/**
 *
 * @returns JSX element
 */
export default function ChangePasswordButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    return (
        <Box>
            <Button onClick={onOpen}>Change Password</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Password</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <FormControl id="old-password">
                                <FormLabel>Old Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl id="new-password">
                                <FormLabel>New Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl id="confirm-password">
                                <FormLabel>Confirm New Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="green"
                                mr={3}
                                onClick={() => {
                                    toast({
                                        title: "Successfully changed Password.",
                                        status: "success",
                                        duration: 2000,
                                        isClosable: true,
                                    });
                                    onClose();
                                }}
                            >
                                Save
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
