import {Box, Button, Heading, HStack, Stack, useColorMode, useDisclosure} from "@chakra-ui/react";
import NewFilterModal from "./NewFilterModal.tsx";

/**
 * renders a separate Box with three Buttons:
 * - Top
 * - New
 * - Dropdown Menu for Countries
 * @returns JSX element
 */
export default function FilterBar() {
    const {colorMode} = useColorMode();


    const {onOpen, isOpen, onClose} = useDisclosure();

    return (
        <Stack>
            <Heading as="h2" fontSize={"xl"} pl={2}>Filter</Heading>
            <Stack
                spacing={6}
                h={'100%'}
                w={'100%'}
                mt={4}>
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={3}
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                >
                    <HStack spacing={3}>
                        <Button colorScheme="green" onClick={onOpen}>
                            ✨ New
                        </Button>

                    </HStack>
                </Box>
            </Stack>
            <NewFilterModal isOpen={isOpen} onClose={onClose}/>
        </Stack>
    );
};