import { Box, Button, HStack, Link, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
import NewFilterModal from "./NewFilterModal.tsx";
import SearchInput from "./SearchInput.tsx";
import CategorySelect from "./CategorySelect.tsx";
import LocationSearchBar from "./LocationSearchBar.tsx";

/**
 * renders a separate Box with three Buttons:
 * - Top
 * - New
 * - Dropdown Menu for Countries
 * @returns JSX element
 */
export default function SearchBar() {
    
    const { colorMode } = useColorMode();
    const { onOpen, isOpen, onClose } = useDisclosure();

    return (
        <Stack>
            <Stack>
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={3}
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                >
                    <HStack>
                        <SearchInput/>
                        <CategorySelect/>
                        <LocationSearchBar onOpen={onOpen}/>
                        <Link href="/results">
                            <Button colorScheme="green">
                                Search
                            </Button>
                        </Link>
                    </HStack>
                </Box>
            </Stack>
            <NewFilterModal isOpen={isOpen} onClose={onClose}/>
        </Stack>
    );
}