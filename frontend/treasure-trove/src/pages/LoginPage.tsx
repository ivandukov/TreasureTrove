import { Box, Text, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, useColorModeValue, Divider, HStack } from "@chakra-ui/react";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";

/**
 * renders the page, where the user can log into 
 * his/her account
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
function LoginPage() {

   return (
      <Flex
         minH={'100vh'}
         align={'center'}
         justify={'center'}
         bg={useColorModeValue('gray.50', 'gray.800')}>
         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
               <Heading fontSize={'4xl'}>Log in to your account</Heading>
               <Text fontSize={'lg'} color={'gray.600'}>
                  Don't have an account? <Link color={'blue.400'} href='/signup'>Sign up</Link>
               </Text>
            </Stack>
            <Box
               rounded={'lg'}
               bg={useColorModeValue('white', 'gray.700')}
               boxShadow={'lg'}
               p={8}>
               <Stack spacing={4}>

                  <FormControl id="email">
                     <FormLabel>Email address</FormLabel>
                     <Input type="email" />
                  </FormControl>

                  <FormControl id="password">
                     <FormLabel>Password</FormLabel>
                     <Input type="password" />
                  </FormControl>
                  
                  <Stack spacing={10}>
                     <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                     </Stack>

                     <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                           bg: 'blue.500',
                        }}>
                        Sign In
                     </Button>

                     <HStack>
                        <Divider/>
                        <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
                           or continue with
                        </Text>
                        <Divider/>
                     </HStack>
                     <OAuthButtonGroup/>
                  </Stack>
               </Stack>
            </Box>
         </Stack>
      </Flex>
   );
}

export default LoginPage