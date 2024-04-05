import { Avatar, Box, Button, Text, HStack, Heading, Stack, useColorMode } from "@chakra-ui/react";
import SearchBar from "../components/homepage/filter/SearchBar";
import FeaturedCardGrid from "../components/homepage/featured/FeaturedCardGrid";
import SortMenu from "../components/SortMenu";

/**
 * retrieves profile data from database
 * TODO: Retrieve data from the currently viewed profile
 * @returns {Response} response - fetched data
 */
const fetchProfile = async () => {

    const response = await fetch('http://localhost:8080/user/');

    if(!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}

/**
 * renders the page of a profile with three components:
 * - Search-Bar
 * - Profile-Box
 * - Giveaway + Request list
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
                            <Stack w="27%">
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