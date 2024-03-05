import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
import NewFilterModal from "./NewFilterModal.tsx";
import { SearchIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";

/**
 * renders a separate Box with three Buttons:
 * - Top
 * - New
 * - Dropdown Menu for Countries
 * @returns JSX element
 */
export default function FilterBar() {
    const { colorMode } = useColorMode();
    const { onOpen, isOpen, onClose } = useDisclosure();

    function SearchBar() {
        return (
            <InputGroup w="35%">
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input placeholder="Search TreasureTrove"/>
            </InputGroup>
        );
    }

    function LocationSearchBar() {
        return (
            <InputGroup w="30%">
                <Input placeholder="City/Postal Code"/>
                <InputRightElement>
                    <IconButton icon={<FaLocationDot/>} onClick={onOpen} aria-label="Location"/>
                </InputRightElement>
            </InputGroup>
        );
    }

    return (
        <Stack>
            <Stack
                spacing={6}
                h={'100%'}
                w={'100%'}
                mt={4}
            >
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={3}
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                >
                    <HStack>
                        <SearchBar/>
                        <Select w="18%">
                            <option value='option1'>All Categories</option>
                            <option value='option2'>Books</option>
                            <option value='option3'>Fashion</option>
                        </Select>
                        <LocationSearchBar/>
                        <Button colorScheme="green">Search</Button>
                    </HStack>
                </Box>
            </Stack>
            <NewFilterModal isOpen={isOpen} onClose={onClose} />
        </Stack>
    );
};