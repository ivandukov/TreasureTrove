import { Avatar, Box, Button, Text, HStack, Heading, Icon, Stack, useColorMode, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import FilterBar from "../components/filter/FilterBar";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { SetStateAction, useState } from "react";



/**
 * renders the page of a profile with three components:
 * - Search-Bar
 * - Profile-Box
 * - Giveaway + Request list
 * TODO: Replace Stacks with Grid (?)
 * @returns JSX element
 */
export default function ProfilePage() {
    const isLoggedIn = false;
    const { colorMode } = useColorMode();
    
    const [sortType, setSortType] = useState('newest');

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    /**
     * displays a 
     * @returns JSX element
     */
    function SortMenu() {
        return (
            <>
                <Stack>
                    <Menu>
                        <MenuButton 
                            as={Button} 
                            rightIcon={<ChevronDownIcon/>}
                        >
                            {sortType}
                        </MenuButton>
                        <MenuList>
                            {['Newest', 'Oldest', 'Popular'].map((option) => (
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
            </>
        );
    }

    return (
        <>
            <Stack>
                <FilterBar/>      
                <HStack align="start">
                    <Box 
                        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                        borderWidth="1px"
                        borderRadius="md"
                        p={5}
                    >
                        <Stack>
                            <Avatar/>
                            <Heading size="md">John Doe</Heading>
                            <Text>Active since: 01.02.2023</Text>
                            <Text>Answering Rate: 85%</Text>
                            <Text>Giveaways: 3</Text>
                            <Text>Requests: 0</Text>
                            <Button>Follow</Button>
                        </Stack>    
                    </Box>
                    <Box 
                        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                        borderWidth="1px"
                        borderRadius="md"
                        p={3}
                        w="73%"
                    >
                        <Stack>
                            <Stack w="20%">
                                <SortMenu/>
                            </Stack>
                            <FeaturedCardGrid/>
                        </Stack>    
                    </Box>
                </HStack>
            </Stack>
        </>
    );
}