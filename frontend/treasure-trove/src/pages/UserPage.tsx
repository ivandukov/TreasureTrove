import { Box, Button, useColorMode, Container, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * renders the page of a user
 * @returns JSX element
 */
export default function UserPage() {
   const isLoggedIn = false;

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
         <Navbar isLoggedIn={isLoggedIn}/>
         <Container maxW='995px' mt={8} mb={8}>
            <Avatar 
               src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
               }
            />
         </Container>
         <Footer/>
      </Box>
   );
}