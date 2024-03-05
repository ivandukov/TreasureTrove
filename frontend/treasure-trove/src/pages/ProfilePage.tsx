import { Avatar, Box, Button, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

/**
 * renders the page of the user-account
 * @returns JSX element
 */
export default function ProfilePage() {
    const isLoggedIn = false;
    const { colorMode } = useColorMode();

    return (
        <>
            <Box 
                bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                borderWidth="1px"
                borderRadius="md"
                p={5}
            >
                <Avatar/>
                <Heading as="h1" size="xl">John Doe</Heading>
                <Button colorScheme="blue" rightIcon={<Icon as={FiEdit}/>}>
                    Edit Profile
                </Button>
            </Box>
        </>
    );
}