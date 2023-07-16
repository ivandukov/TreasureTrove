import { Box, Text, Button, Checkbox, FormControl, FormLabel, Heading, Input, Link, Stack, useColorModeValue, Divider, HStack, useColorMode } from "@chakra-ui/react";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import SmallFooter from "../components/SmallFooter";

/**
 * renders a button with the text "Sign in"
 * @returns JSX element with a Sign in Button
 */
function SignInButton() {
   return (
      <Button
         bg={'blue.400'}
         color={'white'}
         _hover={{
            bg: 'blue.500',
         }}>
         Sign in
      </Button>
   );
}

/**
 * renders three Social Media Buttons as 
 * alternative login options
 * @returns JSX element with various login-options
 */
function OtherLoginOptions() {
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
 * renders a box containing the hyperlink to the RegisterPage
 * @returns JSX element
 */
function CreateAccountField() {
   return (
      <Box
         rounded={'lg'}
         bg={useColorModeValue('white', 'gray.700')}
         boxShadow={'lg'}
         p={5}>
         <Text align={'center'}>
            New to TreasureTrove? <Link color={'blue.400'} href='/register'>Create an account</Link>
         </Text>
      </Box>
   );
}

/**
 * renders the page, where the user can log into 
 * his/her account
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function LoginPage() {

   const { colorMode } = useColorMode();

   return (
      <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} minH="100vh" display="flex">
         <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
               <Heading fontSize={'4xl'}>
                  Sign in to TreasureTrove
               </Heading>
            </Stack>
            <Box
               rounded={'lg'}
               bg={useColorModeValue('white', 'gray.700')}
               boxShadow={'lg'}
               p={7}>
               
               <Stack spacing={3}>
                  <FormControl id="email">
                     <FormLabel>Username or email adress</FormLabel>
                     <Input type="email"/>
                  </FormControl>

                  <FormControl id="password">
                     <FormLabel>Password</FormLabel>
                     <Input type="password"/>
                  </FormControl>

                  <Stack spacing={7}>
                     <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Link color={'blue.400'}>Forgot password?</Link>
                        <Checkbox>Remember me</Checkbox>
                     </Stack>
                     <SignInButton/>
                     <OtherLoginOptions/>
                  </Stack>
               </Stack>
            </Box>
            <CreateAccountField/>
            <SmallFooter/>
         </Stack>
      </Box>
   );
}