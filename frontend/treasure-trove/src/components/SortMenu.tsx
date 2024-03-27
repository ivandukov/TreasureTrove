import React, { SetStateAction, useState } from "react";
import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";

/**
 * 
 * @returns JSX element
 */
export default function SortMenu() {

    const [sortType, setSortType] = useState('newest');

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    Sort: {sortType}
                </MenuButton>
                <MenuList>
                    {['Newest', 'Oldest', 'Popular'].map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleSortChange(option)}
                        >
                            <Box flex="1">{option}</Box>
                            {sortType === option && (
                                <CheckIcon ml="auto"/>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}