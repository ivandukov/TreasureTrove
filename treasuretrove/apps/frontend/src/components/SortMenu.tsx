import { SetStateAction, useState } from "react";
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { BiSort } from "react-icons/bi";

/**
 *
 * @returns JSX element
 */
export default function SortMenu() {
    const [sortType, setSortType] = useState("newest");

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    return (
        <Menu>
                <MenuButton
                    as={Button}
                    leftIcon={<BiSort />}
                    rightIcon={<ChevronDownIcon />}
                >
                    Sort: {sortType}
                </MenuButton>
                <MenuList>
                    {["Newest", "Oldest", "Popular"].map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleSortChange(option)}
                        >
                            <Box flex="1">{option}</Box>
                            {sortType === option && <CheckIcon ml="auto" />}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
    );
}
