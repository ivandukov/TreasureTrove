import { Button, HStack, Modal, ModalHeader, ModalContent, ModalOverlay, ModalBody, ModalFooter, ModalCloseButton } from "@chakra-ui/react";
import Dropzone from "./Dropzone.tsx";

/**
 * displays a Modal with a Box with which
 * the user can upload a profile picture
 *
 * @returns JSX element
 */

export function ProfilePictureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Profile Picture</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Dropzone />
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button colorScheme="green">Save</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
