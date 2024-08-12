import {
    Box,
    Button,
    HStack,
    Link,
    Stack,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react";
import NewFilterModal from "./location/LocationModal.js";
import LocationSearchBar from "./location/LocationSearchBar.js";
import CategorySelect from "@components/CategorySelect.js";
import SearchInput from "./SearchInput.js";

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
                    bg={colorMode === "dark" ? "gray.800" : "white"}
                >
                    <HStack>
                        <SearchInput />
                        <CategorySelect />
                        <LocationSearchBar onOpen={onOpen} />
                        <Link
                            href="/results"
                            style={{ textDecoration: "none" }}
                        >
                            <Button colorScheme="green">Search</Button>
                        </Link>
                    </HStack>
                </Box>
            </Stack>
            <NewFilterModal isOpen={isOpen} onClose={onClose} />
        </Stack>
    );
}
