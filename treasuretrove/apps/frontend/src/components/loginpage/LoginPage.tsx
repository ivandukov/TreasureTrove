import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "../OAuthButtonGroup";
import SmallFooter from "../homepage/SmallFooter";
import { useForm } from "react-hook-form";


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
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={5}
        >
            <Text align={"center"}>
                New to TreasureTrove?{" "}
                <Link color={"blue.400"} href="/register">
                    Create an account
                </Link>
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

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    function onSubmit(values: object): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
    }

    return (
        <Stack spacing={6} mx={"auto"}>
            <Heading>Log into your account</Heading>
            <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={7}
            >
                <Stack spacing={3}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="email">
                            <FormLabel>Username or email</FormLabel>
                            <Input type="email" {...register("email")} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" {...register("password")} />
                        </FormControl>
                        <Stack spacing={6}>
                            <HStack>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={"blue.400"}>Forgot password?</Link>
                            </HStack>
                            <Button
                                colorScheme="green"
                                type="submit"
                                onClick={onSubmit}
                                isLoading={isSubmitting}
                            >
                                Login
                            </Button>
                            <OtherLoginOptions />
                        </Stack>
                    </form>
                </Stack>
            </Box>
            <CreateAccountField />
            <SmallFooter />
        </Stack>
    );
}