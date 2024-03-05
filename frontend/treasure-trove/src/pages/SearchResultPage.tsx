import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Select, Stack, useColorMode } from "@chakra-ui/react";
import FilterBar from "../components/filter/FilterBar";
import { SetStateAction, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function SearchResultPage() {

    const { colorMode } = useColorMode();
    const [sortType, setSortType] = useState('newest');

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    return (
        <>
            <Stack>
                <FilterBar/>
                <Box bg={colorMode === 'dark' ? 'gray.800' : 'white'} p={3}>
                    <Stack w="20%">
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Sort: {sortType}
                            </MenuButton>
                            <MenuList>
                                {['Newest', 'Popularity', 'Relevance'].map((option) => (
                                    <MenuItem
                                        key={option}
                                        onClick={() => handleSortChange(option)}
                                    >
                                        <Box flex="1">{option}</Box>
                                        {sortType === option && (
                                            <CheckIcon ml="auto" />
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Stack>
                    
                </Box>
            </Stack>
        </>
    );
}