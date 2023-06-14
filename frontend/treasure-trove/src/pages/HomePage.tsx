import { Box, Container, useColorMode } from "@chakra-ui/react";
import LargeWithNewsletter from "../components/Footer";
import Navbar from "../components/Navbar";
import CardGrid from "../components/CardGrid";

/**
 * main function in this file defining 
 * the top-level component
 * @returns JSX element (a combination of Javascript and HTML),
 * which will be displayed in the browser
 */
export default function HomePage() {

   const { colorMode } = useColorMode();

   return (
      <>
         <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}> {/* background of the whole site */}
            <Navbar/>
            <Container maxW='995px' mt={8} mb={8}>
               <CardGrid title="Top Giveaways"/>
               <CardGrid title="Newest Giveaways"/>
            </Container>
            <LargeWithNewsletter/>
         </Box>
      </>
   )
}