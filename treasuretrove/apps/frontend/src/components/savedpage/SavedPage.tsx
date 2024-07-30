import {
    Box,
    Flex,
    Spacer,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useColorMode,
} from "@chakra-ui/react";
import FeaturedCardGrid from "../homepage/featured/FeaturedCardGrid";
import SortMenu from "../SortMenu";

/**
 * This Page contains a list giveaways/requests/drafts,
 * the user has saved
 * @returns JSX element
 */
export default function SavedPage() {
    const { colorMode } = useColorMode();

    return (
        <Stack>
                <Box
                    bg={colorMode === "dark" ? "gray.800" : "white"}
                    p={3}
                    borderWidth="1px"
                    borderRadius="md"
                >
                    <Tabs variant="soft-rounded" colorScheme="green">
                        <Stack>
                            <Flex>
                                <TabList>
                                    <Tab>Giveaways</Tab>
                                    <Tab>Requests</Tab>
                                    <Tab>Drafts</Tab>
                                </TabList>
                                <Spacer />
                                <SortMenu />
                            </Flex>
                            <TabPanels>
                                <TabPanel>
                                    <FeaturedCardGrid />
                                </TabPanel>
                                <TabPanel></TabPanel>
                                <TabPanel></TabPanel>
                            </TabPanels>
                        </Stack>
                    </Tabs>
                </Box>
            </Stack>
    );
}
