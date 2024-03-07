import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { useState, SetStateAction } from "react";

/**
 * 
 * @returns JSX element
 */
export default function LoggedInHomepage() {

    const [sortType, setSortType] = useState('newest');
    const { colorMode } = useColorMode();
    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    /**
         * 
         * @returns 
         */
    function SortMenu() {
        return (
            <>
                <Stack w="19%">
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
                <FilterBar />
                <Box 
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'} 
                    p={3}
                    borderWidth="1px"
                    borderRadius="md"
                >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <Stack>
                        <Flex>
                            <TabList>
                                <Tab>Giveaways</Tab>
                                <Tab>Requests</Tab>
                            </TabList>
                            <Spacer />
                            <SortMenu />
                        </Flex>
                    </Stack>
                    <TabPanels>
                        <TabPanel>
                            <Stack>
                                <FeaturedCardGrid />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                </Box>
            </Stack>
        </>
    );
}