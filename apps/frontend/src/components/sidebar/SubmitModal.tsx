import { Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react";
import CategorySelect from "../CategorySelect";

interface SubmitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SubmitModal({ isOpen, onClose }: SubmitModalProps) {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Create advertisement
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <RadioGroup defaultValue="1" colorScheme="green">
                                <Radio value="1">Giveaway</Radio>
                                <Radio value="2">Request</Radio>
                            </RadioGroup>
                            <HStack>
                                <Input
                                    id="title"
                                    placeholder="Title"
                                />
                                <CategorySelect />
                            </HStack>
                            <Textarea
                                id="description"
                                placeholder="Description"
                            />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={onClose}>Save</Button>
                            <Button colorScheme='green' onClick={onClose}>
                                Submit
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}