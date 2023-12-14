import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, useColorMode } from "@chakra-ui/react";

export default function UserSettingsPage() {

    const isLoggedIn = true;
    const { colorMode } = useColorMode();
    return (

        <Box bg={ colorMode === 'dark' ? 'gray.900' : 'gray.200' }>
            <Container maxW='995px' mt={8} mb={8}>
            </Container>
        </Box>

    );
}