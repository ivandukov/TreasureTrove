import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Select, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
import NewFilterModal from "./NewFilterModal.tsx";
import { CheckIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { SetStateAction, useState } from "react";

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
    const [sortType, setSortType] = useState('newest');

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    function SearchBar() {
        return (
            <InputGroup w="35%">
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input placeholder="Search TreasureTrove" />
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

    function CategoriesMenu() {
        return (
            <Select w="21%">
                <option value='option1'>All Categories</option>
                <option value='option2'>Books</option>
                <option value='option3'>Fashion</option>
            </Select>
        );
    }

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
                        <SearchBar/>
                        <CategoriesMenu/>
                        <LocationSearchBar/>
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
};