import { Container, Stack, Heading, Text, HStack, Button, Box } from "@chakra-ui/react";
import LargeWithNewsletter from "../components/Footer";
import Navbar from "../components/Navbar";

/**
 * main function in this file defining 
 * the top-level component
 * @returns JSX element (a combination of Javascript and HTML),
 * which will be displayed in the browser
 */
function HomePage() {

   return (
      <>
         <Navbar/>
         <Container h={"100%"}>
            <Stack
               as={Box}
               textAlign={'center'}
               spacing={{ base: 8, md: 14 }}
               py={{ base: 20, md: 36 }}>

               <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '8xl' }}
                  lineHeight={'110%'}>
                  Treasure <br />
                  <Text as={'span'} color={'blue.400'}>
                     Trove
                  </Text>
               </Heading>

               <Text
                  fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                  color={'gray.500'}>
                  Welcome to TreasureTrove! Unlock a world of hidden treasures, where the joy of giving and the thrill of discovery converge.
                  Find new homes for your preloved items and unearth unique gems that bring joy to your life.
               </Text>

               <HStack spacing={5} justifyContent={"center"}>
                  <Button
                     rounded={"full"}
                     px={6}
                     colorScheme={"blue"}
                     bg={"blue.400"}
                     _hover={{ bg: "blue.500" }}
                  >
                     Get started
                  </Button>
                  <Button rounded={"full"} px={6}>
                     Learn more
                  </Button>
               </HStack>
            </Stack>
         </Container>
         <LargeWithNewsletter />
      </>
   )
}

export default HomePage