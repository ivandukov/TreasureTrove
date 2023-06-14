import { Heading, SimpleGrid, Box, useColorMode } from "@chakra-ui/react";
import GiveawayCard from "../components/GiveawayCard";

/**
 * 
 * @returns 
 */
export default function CardGrid({title} : {title:string}) {
   const { colorMode } = useColorMode();
   return (
      <Box borderWidth="1px" borderRadius="md" p={4} mb={6} bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
         <Heading size='md' mb={4}>{title}</Heading>
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