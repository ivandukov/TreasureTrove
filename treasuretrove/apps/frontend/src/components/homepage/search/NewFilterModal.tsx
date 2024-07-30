import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { NewFilterForm } from "./form/NewFilterForm.tsx";

export default function NewFilterModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent
                    width={{ base: "100%", md: "70%", xl: "70%" }}
                    maxW={{ base: "100%", md: "70%", xl: "70%" }}
                >
                    <ModalHeader>Location</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NewFilterForm />
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button colorScheme="green" onClick={onClose}>
                                Save
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    );
}
