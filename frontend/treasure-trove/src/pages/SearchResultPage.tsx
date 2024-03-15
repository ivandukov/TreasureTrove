import { Box, Button, Flex, Text, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode, HStack } from "@chakra-ui/react";
import FilterBar from "../components/filter/FilterBar";
import { SetStateAction, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";

/**
 * 
 * @returns 
 */
export default function SearchResultPage() {

    const { colorMode } = useColorMode();
    const [sortType, setSortType] = useState('newest');

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
                <Stack>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
                <Heading as='h5' size='sm'>
                    55.000+ results for: "Sofa"
                </Heading>
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
                                <Spacer/>
                                <HStack>
                                    <Text>Sort by</Text>
                                    <SortMenu/>
                                </HStack>
                            </Flex>                       
                        </Stack>
                        <TabPanels>
                            <TabPanel>
                                <Stack>
                                    <FeaturedCardGrid/>
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