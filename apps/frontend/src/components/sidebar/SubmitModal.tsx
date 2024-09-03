import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import SubmitModalContent from "./SubmitModalContent";
import { FieldValues, Form, useForm } from "react-hook-form";

function onSubmit(values: FieldValues): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
        }, 3000);
    });
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
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        New advertisement
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}> 
                            <SubmitModalContent register={register} />
                        </form>
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
        </>
    );
}