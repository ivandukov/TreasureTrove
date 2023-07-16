import { Box, Button, HStack, SimpleGrid, Stack, useColorMode } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GiveawayCard from "../components/GiveawayCard";
import DropDownButton from "../components/DropDownButton";

/**
 * renders a Box containing multiple Cards displaying
 * a Giveaway. For more information on the GiveawayCards, 
 * see GiveawayCard.tsx
 * @returns JSX element
 */
function CardGrid() {

   const { colorMode } = useColorMode();

   return (
      <Box borderWidth="1px" borderRadius="md" p={4} mb={6} bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
         <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mb={2}>
            {Array.from({ length: 6 }, (_, index) => (
               <GiveawayCard
                  title="Living Room Sofa"
                  authorname="Gordon Freeman"
                  key={index}
               />
            ))}
         </SimpleGrid>
      </Box>
   );
}

/**
 * renders a separate Box with three Buttons:
 * - Top 
 * - New
 * - Dropdown Menu for Countries
 * @returns JSX element
 */
function FilterBar()
{
   const { colorMode } = useColorMode();

   return (
      <Stack 
         spacing={6} 
         mx={'auto'} 
         maxW='990px' 
         mt={4}
         mb={4}>
         <Box 
            borderWidth="1px" 
            borderRadius="md" 
            p={3} 
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
         >
            <HStack spacing={3}>
               <Button variant="outline" colorScheme="blue" >
                  Top
               </Button>
               <Button variant="outline" colorScheme="blue">
                  New
               </Button>
               <DropDownButton defaultValue="Germany"/>
            </HStack>
         </Box>
      </Stack>
   );
}

/**
 * main function in this file defining the top-level component
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function HomePage() {

   const { colorMode } = useColorMode();

   return (
      <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}>
         <Navbar/>
         <FilterBar/>
         <Stack 
            spacing={6} 
            mx={'auto'} 
            maxW='990px' 
            mt={4}
            mb={4}>
            <CardGrid/>
         </Stack>
         <Footer/>
      </Box>
   )
}