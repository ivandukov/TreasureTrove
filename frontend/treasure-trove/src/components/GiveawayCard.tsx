import { Image, Text, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Link, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFillXCircleFill, BsFlag, BsShare, BsThreeDotsVertical } from "react-icons/bs";

const FavoriteButton = () => {
   const [isFavorite, setIsFavorite] = useState(false);

   const handleToggleFavorite = () => {
      setIsFavorite(!isFavorite);
   };

   return (
      <IconButton
         aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
         icon={<Icon as={isFavorite ? FaHeart : FaRegHeart} />}
         colorScheme={isFavorite ? 'red' : 'gray'}
         onClick={handleToggleFavorite}
      />
   );
};


function DropDownButton() {
   return (
      <Menu>
         <MenuButton
            as={IconButton}
            icon={<Icon as={BsThreeDotsVertical} />}
            variant="ghost"
            colorScheme="gray"
         />
         <MenuList>
            <MenuItem icon={<Icon as={BsShare} />}>Share</MenuItem>
            <MenuItem icon={<Icon as={BsFillXCircleFill} />}>Not Interested</MenuItem>
            <MenuItem icon={<Icon as={BsFlag} />}>Report</MenuItem>
         </MenuList>
      </Menu>
   );
}


export default function GiveawayCard({title, authorname} : {title:string, authorname:string}) {

   return (
      <Box
         maxW="sm"
         borderWidth="1px"
         borderRadius="lg"
         overflow="hidden"
         boxShadow="lg"
         transition="background-color 0.3s"
         _hover={{ bg: "gray.100" }}
      >
         <Box>
            <Link>
               <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'"
                  alt="Giveaway Image"
                  boxSize="180px"
                  objectFit="cover"
                  w="100%"
               />
            </Link>
         </Box>

         <Box p="4">
            <Flex justify="space-between" align="center">
               <FavoriteButton/>
               <Box>
                  <Heading size="md">
                     <Link>{title}</Link>
                  </Heading>
                  <Text color="gray.500">
                     <Link>{authorname}</Link>
                  </Text>
               </Box>

               <DropDownButton />
            </Flex>
         </Box>
      </Box>
   );
}