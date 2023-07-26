import { Box, Text, Button, Checkbox, FormControl, FormLabel, Heading, Input, Link, Stack, useColorModeValue, Divider, HStack, useColorMode, Container, HTMLChakraProps, chakra } from "@chakra-ui/react";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import SmallFooter from "../components/SmallFooter";

const Logo = (props: HTMLChakraProps<'svg'>) => (
   <chakra.svg
      color="accent"
      height="12"
      width="auto"
      viewBox="0 0 89 89"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         fill="currentColor"
         fillRule="evenodd"
         clipRule="evenodd"
         d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
      />
   </chakra.svg>
)

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
            <Divider />
            <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
               or continue with
            </Text>
            <Divider />
         </HStack>
         <OAuthButtonGroup />
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
      <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'} minH="100vh">
         <Container 
            py={{ base: '12', md: '0' }} 
            px={{ base: '0', sm: '9' }}>
            <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12}>
               <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>
                     Log in to your account
                  </Heading>
               </Stack>
               <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={7}>
                  <Stack spacing={3}>
                     <FormControl id="email">
                        <FormLabel>Username or email</FormLabel>
                        <Input type="email"/>
                     </FormControl>
                     <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password"/>
                     </FormControl>
                     <Stack spacing={6}>
                        <Stack
                           direction={{ base: 'column', sm: 'row' }}
                           align={'start'}
                           justify={'space-between'}>
                           <Checkbox>Remember me</Checkbox>
                           <Link color={'blue.400'}>Forgot password?</Link>
                        </Stack>
                        <SignInButton/>
                        <OtherLoginOptions/>
                     </Stack>
                  </Stack>
               </Box>
               <CreateAccountField/>
               <SmallFooter/>
            </Stack>
         </Container>
      </Box>
   );
}