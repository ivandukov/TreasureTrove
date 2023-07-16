import { Box, Button, useColorMode, Container } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * renders the page of a user
 * @returns JSX element
 */
export default function UserPage() {

   /**
    * Sample user data
    */
   const user = {
      username: 'Gordon Freeman',
      email: 'john.doe@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      followers: 1500,
   };

   const [isFollowing, setIsFollowing] = useState(false);
   const { colorMode } = useColorMode();
   
   const handleFollowToggle = () => {
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);
   };

   const FollowButton = () => {
      return (
         <Button
            mt={8}
            colorScheme={isFollowing ? 'gray' : 'blue'}
            onClick={handleFollowToggle}>
            {isFollowing ? 'Unfollow' : 'Follow'}
         </Button>
       );
   }

   return (
      <Box bg={ colorMode === 'dark' ? 'gray.900' : 'gray.200' }>
         <Navbar/>
         <Container maxW='995px' mt={8} mb={8}>
         </Container>
         <Footer/>
      </Box>
   );
}