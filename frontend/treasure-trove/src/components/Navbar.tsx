import {
   Box, Flex, Button, Stack, Link, useColorMode, Spacer, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider, 
   useColorModeValue, Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsFillGearFill, BsGear, BsPerson } from 'react-icons/bs';
import React from 'react';
import DropDownButton from "./DropDownButton.tsx";
import '../stylesheets/navbar.css';

/**
 * 
 * @returns JSX elment
 */
function SignUpButton() {

   return (
      <>
         <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'register'}
            _hover={{
               bg: 'blue.500',
            }}
         >
            Sign up
         </Button>
      </>
   );
}

/**
 * 
 * @returns JSX elment
 */
function LoginButton() {
   return (
      <Button
         as={'a'}
         fontSize={'sm'}
         fontWeight={400}
         variant={'link'}
         href={'login'}
      >
         Login
      </Button>
   );
}

/**
 * 
 * @returns JSX elment
 */
function ProfileButton() {
   return (
      <Menu>
         <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
               src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
               }
            />
         </MenuButton>
         <MenuList>
            <MenuItem icon={<Icon as={BsPerson} />}>John Doe</MenuItem>
            <MenuItem icon={<Icon as={BsGear} />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem>Log out</MenuItem>
         </MenuList>
      </Menu>
   );
}

/** 
 * renders a Navigation bar with various Buttons, Inputs etc.
 * @returns JSX element
 */
export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {

   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Box>
         <Flex className='navbar-main-box' bg={useColorModeValue('white', 'gray.800')}>
            <Stack flex={{ base: 1 }}>
               <Link href="/home">
                  Logo
               </Link>
            </Stack>

            <Stack flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}
            >
               <DropDownButton defaultValue="All Categories"/>
            </Stack>

            <Spacer/>

            <Stack
               flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}>

               {isLoggedIn ? (
                  <>
                     <ProfileButton/>
                  </>
               ) : (
                  <>
                     <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                     </Button>
                     <LoginButton/>
                     <SignUpButton/>
                  </>
               )}
            </Stack>
         </Flex>
      </Box>
   );
}