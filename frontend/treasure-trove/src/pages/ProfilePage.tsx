import { Avatar, Box, Button, Text, HStack, Heading, Stack, useColorMode } from "@chakra-ui/react";
import SearchBar from "../components/homepage/filter/SearchBar";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";
import SortMenu from "../components/SortMenu";

/**
 * renders the page of a profile with three components:
 * - Search-Bar
 * - Profile-Box
 * - Giveaway + Request list
 * TODO: Replace Stacks with Grid (?)
 * @returns JSX element
 */
export default function ProfilePage() {

    const { colorMode } = useColorMode();

    return (
        <>
            <Stack>
                <SearchBar/>      
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