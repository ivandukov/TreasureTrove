import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast,
    Text,
    Flex,
    Spacer,
} from "@chakra-ui/react";

export function ShareModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const toast = useToast();

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Share</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box borderWidth="1px" borderRadius="md">
                            <Flex p={2} alignItems="center">
                                <Text ml={2}>https://www.youtube.com/</Text>
                                <Spacer />
                                <Button
                                    colorScheme="green"
                                    onClick={() =>
                                        toast({
                                            title: "Copied Link to Clipboard",
                                            position: "bottom-left",
                                            duration: 2000,
                                        })
                                    }
                                >
                                    Copy
                                </Button>
                            </Flex>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
