import {Avatar, Box, Button, Container, useColorMode} from "@chakra-ui/react";
import {useState} from "react";
import Footer from "../components/Footer";

/**
 * renders the page of the user-account
 * @returns JSX element
 */
export default function UserPage() {
    const isLoggedIn = false;

    /**
     * Sample user data
     */
    const user = {
        username: 'John Doe',
        email: 'john.doe@mail.com',
        followers: 1500,
    };

    const [isFollowing, setIsFollowing] = useState(false);
    const {colorMode} = useColorMode();
    
    return (
        <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}>
            <Container maxW='995px' mt={8} mb={8}>
                <Avatar
                    size='2xl'
                    src={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
                />
            </Container>
            <Footer/>
        </Box>
    );
}