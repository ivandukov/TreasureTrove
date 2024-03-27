import { 
    Box, Flex, Heading, Spacer, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode 
} from "@chakra-ui/react";
import FilterBar from "../components/filter/FilterBar";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";
import SortMenu from "../components/SortMenu";

/**
 * renders a Search bar with a list of giveaways or
 * requests underneath it
 * @returns JSX element
 */
export default function SearchResultPage() {

    const { colorMode } = useColorMode();

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
                                <SortMenu/>  
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