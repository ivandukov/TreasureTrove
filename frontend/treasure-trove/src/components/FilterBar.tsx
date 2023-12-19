import {Box, Button, Heading, HStack, Stack, useColorMode} from "@chakra-ui/react";
import DropDownButton from "./DropDownButton";

/**
 * renders a separate Box with three Buttons:
 * - Top
 * - New
 * - Dropdown Menu for Countries
 * @returns JSX element
 */
export default function FilterBar() {
    const {colorMode} = useColorMode();

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
                        <Button variant="outline" colorScheme="blue">
                            Top
                        </Button>
                        <Button variant="outline" colorScheme="blue">
                            New
                        </Button>
                        <DropDownButton defaultValue="Germany"/>
                    </HStack>
                </Box>
            </Stack>
        </Stack>
    );
}