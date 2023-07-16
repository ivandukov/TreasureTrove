import {
   Box,
   Flex,
   Text,
   Button,
   Stack,
   Collapse,
   Icon,
   Link,
   useColorModeValue,
   useDisclosure,
   useColorMode,
   Spacer
} from '@chakra-ui/react';

import {
   MoonIcon,
   SunIcon,
   ChevronDownIcon,
} from '@chakra-ui/icons';

import SearchBar from "./SearchBar.tsx";
import DropDownButton from "./DropDownButton.tsx";

/** 
 * renders a Navigation bar with various Buttons, Inputs etc.
 * @returns JSX element
 */
export default function Navbar() {

   const { colorMode, toggleColorMode } = useColorMode();
   const { isOpen } = useDisclosure();

   return (
      <Box>
         <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            
            <Stack flex={{ base: 1 }}>
               <Link href="/home">
                  Logo
               </Link>
            </Stack>

            <Stack flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}>
               <SearchBar width="280px" ph="Search"/>
               <SearchBar width="280px" ph="Zip Code / location"/>
               <DropDownButton defaultValue="All Categories"/>
            </Stack>

            <Spacer/>

            <Stack
               flex={{ base: 1, md: 0 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={6}>

               <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
               </Button>

               <Button
                  as={'a'}
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={'link'}
                  href={'login'}>
                  Sign in
               </Button>

               <Button
                  as={'a'}
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  bg={'blue.400'}
                  href={'signup'}
                  _hover={{
                     bg: 'blue.500',
                  }}>
                  Sign up
               </Button>
            </Stack>

         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav/>
         </Collapse>
      </Box>
   );
}

/**
 * renders the mobil version of the Navigation Bar
 * @returns JSX element
 */
const MobileNav = () => {
   return (
      <Stack
         bg={useColorModeValue('white', 'gray.800')}
         p={4}
         display={{ md: 'none' }}>
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   );
};

/**
 * renders the items in the mobile version of the Navigation Bar
 * @param label
 * @param children
 * @param href 
 * @returns JSX element
 */
const MobileNavItem = ({ label, children, href }: NavItem) => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Stack spacing={4} onClick={children && onToggle}>
         <Flex
            py={2}
            as={Link}
            href={href ?? 'home'}
            justify={'space-between'}
            align={'center'}
            _hover={{
               textDecoration: 'none',
            }}>
            <Text
               fontWeight={600}
               color={useColorModeValue('gray.600', 'gray.200')}>
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
               />
            )}
         </Flex>

         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
               mt={2}
               pl={4}
               borderLeft={1}
               borderStyle={'solid'}
               borderColor={useColorModeValue('gray.200', 'gray.700')}
               align={'start'}>
               {children &&
                  children.map((child) => (
                     <Link key={child.label} py={2} href={child.href}>
                        {child.label}
                     </Link>
                  ))}
            </Stack>
         </Collapse>
      </Stack>
   );
};

interface NavItem {
   label: string;
   subLabel?: string;
   children?: Array<NavItem>;
   href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
   {
      label: 'Inspiration',
      children: [
         {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: 'home',
         },
         {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: 'home',
         },
      ],
   },
   {
      label: 'Contact',
   },
   {
      label: 'Help',
      href: 'home',
   }
];
