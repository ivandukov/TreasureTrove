import { Box, Button, Divider, FormControl, FormLabel, Heading, HStack, Input, InputGroup, 
        InputRightElement, Link, Stack, Text, useColorMode, useColorModeValue, 
} from '@chakra-ui/react';

import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { OAuthButtonGroup } from '../components/OAuthButtonGroup';
import SmallFooter from '../components/SmallFooter';

/**
 * displays a separate box, which contains a hyperlink to the
 * LoginPage
 * @returns a JSX element containing the Link to the LoginPage
 */
function LoginBox() {
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
 * displays registration options such as Google, Twitter etc.
 * @returns JSX element with various Sign in Options
 */
function OtherRegisterOptions() {
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

interface InputPasswordProps {
    showPassword: boolean;
    register: UseFormRegister<FieldValues>;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputPassword({showPassword, register, setShowPassword} : InputPasswordProps) {
    return (
        <>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={showPassword ? 'text' : 'password'}
                        id='password' 
                        placeholder="At least 6 characters"
                        {...register("password")}
                    />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    );
}

/**
 * renders the page, where the user can create a new
 * account
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function RegisterPage() {

    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm();

    function onSubmit(values: any): Promise<void> {
        
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000)
        })
    }

    return (
        <Box
            bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
            display="flex"
        >
            <Stack spacing={6} mx={'auto'}>
                <Heading fontSize={'4xl'}>
                    Sign up to TreasureTrove
                </Heading>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={7}>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <Stack spacing={3}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    id='email'
                                    type='email'
                                    {...register("email")}
                                />
                            </FormControl>
                            <InputPassword
                                showPassword={showPassword}
                                register={register}
                                setShowPassword={setShowPassword}
                            />
                            <Button 
                                colorScheme='green' 
                                type="submit" 
                                onClick={onSubmit}
                                isLoading={isSubmitting}
                            >
                                Register
                            </Button>
                            <OtherRegisterOptions/>
                        </Stack>
                    </form>
                </Box>
                <LoginBox/>
                <SmallFooter/>
            </Stack>
        </Box>
    );
}
