import {
   Box,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   HStack,
   InputRightElement,
   Stack,
   Button,
   Heading,
   Text,
   useColorModeValue,
   Link,
   useColorMode,
   Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { OAuthButtonGroup } from '../components/OAuthButtonGroup';
import SmallFooter from '../components/SmallFooter';

/**
 * renders a separate box, which contains a hyperlink to the 
 * LoginPage
 * @returns a JSX element containing the Link to the LoginPage
 */
function LoginField() {
   return (
      <Box
         rounded={'lg'}
         bg={useColorModeValue('white', 'gray.700')}
         boxShadow={'lg'}
         p={5}>
            <Text align={'center'}>
               Already have an account? <Link color={'blue.400'} href='login'>Login</Link>
            </Text>
      </Box>
   );
}

/**
 * 
 * @returns JSX element with various Sign in Options
 */
function OtherRegisterOptions() {
   return (
      <>
         <HStack>
            <Divider/>
            <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
               or continue with
            </Text>
            <Divider/>
         </HStack>
         <OAuthButtonGroup/>
      </>
   );
}

/**
 * renders a "Register"-Button, which creates a new account
 * @returns JSX element containing Register Button
 */
function RegisterButton() {

   return (
      <Button
      bg={'blue.400'}
      color={'white'}
      _hover={{
         bg: 'blue.500',
      }}>
      Register
   </Button>
   );
}

/**
 * renders the page, where the user can create a new
 * account
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function RegisterPage() {

   const { colorMode } = useColorMode();
   const [showPassword, setShowPassword] = useState(false);

   function InputPassword()
   {
      return (
         <>
            <FormControl id="password" isRequired>
               <FormLabel>Password</FormLabel>
               <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder="At least 6 characters" />
                  <InputRightElement h={'full'}>
                     <Button
                        variant={'ghost'}
                        onClick={() =>
                           setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                     </Button>
                  </InputRightElement>
               </InputGroup>
            </FormControl>
         </>
      );
   }

   return (
      <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} minH="100vh" display="flex">
         <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12}>
            <Stack align={'center'}>
               <Heading fontSize={'4xl'}>
                  Sign up to TreasureTrove
               </Heading>
            </Stack>
            <Box
               rounded={'lg'}
               bg={useColorModeValue('white', 'gray.700')}
               boxShadow={'lg'}
               p={7}>
               <Stack spacing={3}>
                  <FormControl id="email" isRequired>
                     <FormLabel>Email address</FormLabel>
                     <Input type="email"/>
                  </FormControl>
                  <InputPassword/>
                  <RegisterButton/>
                  <OtherRegisterOptions/>
               </Stack>
            </Box>
            <LoginField/>
            <SmallFooter/>
         </Stack>
      </Box>
   );
}
