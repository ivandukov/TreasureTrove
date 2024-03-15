import { Box, Card, Heading, useColorMode } from "@chakra-ui/react";
import ImageCarousel from "../components/ImageCarousel";

/**
 * 
 * @returns 
 */
export default function MessagePage() {
    
    const { colorMode } = useColorMode();

    return (
        <>
            <Box 
                bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                borderWidth="1px"
                borderRadius="md"
                p={8}
            > 
                
            </Box>
        </>
    );
}