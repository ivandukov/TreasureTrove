import { ChevronDownIcon, CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardHeader, Flex, HStack, Heading, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";

/**
 * 
 * @returns 
 */
export default function SavedPage() {

    const { colorMode } = useColorMode();
    const [sortType, setSortType] = useState('newest');

    const handleSortChange = (newSortType: SetStateAction<string>) => {
        setSortType(newSortType);
    };

    /**
     * 
     * @returns 
     */
    function SearchBar() {
        return (
            <InputGroup w="35%">
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input placeholder="Search"/>
            </InputGroup>
        );
    }

    /**
     * 
     * @returns 
     */
    function SortMenu() {

        return (
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
                                <CheckIcon ml="auto" />
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        );
    }

    return (
        <>
            <Stack>
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
                                    <Tab>Drafts</Tab>
                                </TabList>
                                <Spacer/>
                                <SortMenu/>
                            </Flex>
                            <TabPanels>
                                <TabPanel>
                                    <FeaturedCardGrid/>
                                </TabPanel>
                                <TabPanel>           
                                </TabPanel>
                                <TabPanel>
                                </TabPanel>
                            </TabPanels>
                        </Stack>
                    </Tabs>
                </Box>
            </Stack>
        </>
    );
}