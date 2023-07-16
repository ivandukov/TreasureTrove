import { Box, Container, useColorMode } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * renders the page of a Giveaway Post
 * @returns JSX element
 */
export default function ProductPage() {
    const { colorMode } = useColorMode();
    return (
        <Box bg={ colorMode === 'dark' ? 'gray.900' : 'gray.100' }>
            <Navbar/>
            <Container maxW='995px' mt={8} mb={8}>
                
            </Container>
            <Footer/>
        </Box>
    );
}