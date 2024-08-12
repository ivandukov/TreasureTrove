import {
    Box,
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
import OpenStreetMap from "./OpenStreetMap";

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LocationModal({isOpen, onClose} : LocationModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent maxW="1000px" maxHeight="800px">
                <ModalHeader>Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <OpenStreetMap/>
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
