import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import SubmitModalContent from "./SubmitModalContent";
import { useForm } from "react-hook-form";

function onSubmit(values: object): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
        }, 3000);
    });
    // TODO: Navigate to GiveawayPage
}

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubmitModal({ isOpen, onClose }: SubmitModalProps) {

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            New advertisement
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <SubmitModalContent register={register}/>
                        </ModalBody>
                        <ModalFooter>
                            <HStack>
                                <Button onClick={onClose}>Cancel</Button>
                                <Button onClick={onClose}>Save</Button>
                                <Button 
                                    type="submit"
                                    colorScheme="green" 
                                    onClick={onSubmit}                       
                                    isLoading={isSubmitting}
                                >
                                    Submit
                                </Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    );
}