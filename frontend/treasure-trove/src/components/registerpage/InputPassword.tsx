import {
    Button, FormControl, FormLabel, Input, InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react';

interface InputPasswordProps {
    showPassword: boolean;
    register: UseFormRegister<FieldValues>;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export function InputPassword({ showPassword, register, setShowPassword }: InputPasswordProps) {
    return (
        <>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        placeholder="At least 6 characters"
                        {...register("password")} />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                            onClick={() => setShowPassword((showPassword) => !showPassword)}
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    );
}
