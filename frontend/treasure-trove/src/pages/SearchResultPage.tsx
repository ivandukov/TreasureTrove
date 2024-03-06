import { Box, Button, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react";
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

    return (
        <>
            <Stack>
                <FilterBar/>
                <Box bg={colorMode === 'dark' ? 'gray.800' : 'white'} p={3}>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <Stack>
                            <Heading as='h5' size='sm'>55.000+ results for: Sofa</Heading>
                            <HStack>
                                <TabList>
                                <Tab>Giveaways</Tab>
                                <Tab>Requests</Tab>
                            </TabList>
                            </HStack>                            
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