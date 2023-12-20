import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import {NewFilterForm} from "./form/NewFilterForm.tsx";

export default function NewFilterModal({isOpen, onClose}: {
    isOpen: boolean,
    onClose: () => void
}) {


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay/>
                <ModalContent
                    width={{base: "100%", md: "70%", xl: "70%"}}
                    maxW={{base: "100%", md: "70%", xl: "70%"}}
                >
                    <ModalHeader>New Filter</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <NewFilterForm/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}