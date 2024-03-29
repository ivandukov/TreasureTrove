import {
    Button, FormControl, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, Textarea
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function MessageModal({ onClose, isOpen }: { onClose: () => void; isOpen: boolean; }) {

    const {
        handleSubmit, register, formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values: any): Promise<void> {

        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
        // TODO: Close Modal
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            Contact John Doe
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Textarea
                                    id='message'
                                    placeholder='Your message'
                                    {...register("message")} />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <HStack>
                                <Button onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    colorScheme="green"
                                    onClick={onSubmit}
                                    isLoading={isSubmitting}
                                >
                                    Send
                                </Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    );
}
