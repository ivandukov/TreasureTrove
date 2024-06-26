import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SmallFooter from "../homepage/SmallFooter";
import { LoginBox } from "./LoginBox";
import { OtherRegisterOptions } from "./OtherRegisterOptions";
import { InputPassword } from "./InputPassword";

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
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values: any): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
    }

    return (
        <Box bg={colorMode === "dark" ? "gray.900" : "gray.100"} display="flex">
            <Stack spacing={6} mx={"auto"}>
                <Heading fontSize={"4xl"}>Sign up to TreasureTrove</Heading>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={7}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                />
                            </FormControl>
                            <InputPassword
                                showPassword={showPassword}
                                register={register}
                                setShowPassword={setShowPassword}
                            />
                            <Button
                                colorScheme="green"
                                type="submit"
                                onClick={onSubmit}
                                isLoading={isSubmitting}
                            >
                                Register
                            </Button>
                            <OtherRegisterOptions />
                        </Stack>
                    </form>
                </Box>
                <LoginBox />
                <SmallFooter />
            </Stack>
        </Box>
    );
}
