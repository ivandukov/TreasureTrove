import {
    Button,
    Center,
    Flex,
    FormControl,
    HStack,
    Heading,
    PinInput,
    PinInputField,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

/**
 * displays a Card containing inputs for numbers, the
 * user has received by mail in order to authenticate
 * the login
 * @returns JSX element
 */
export default function EmailVerificationCard() {
    return (
        <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack
                    spacing={4}
                    w={"full"}
                    maxW={"sm"}
                    bg={useColorModeValue("white", "gray.700")}
                    rounded={"xl"}
                    boxShadow={"lg"}
                    p={6}
                    my={10}
                >
                    <Center>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: "2xl", md: "3xl" }}
                        >
                            Verify your Email
                        </Heading>
                    </Center>
                    <Center
                        fontSize={{ base: "sm", sm: "md" }}
                        color={useColorModeValue("gray.800", "gray.400")}
                    >
                        We have sent code to your email
                    </Center>
                    <Center
                        fontSize={{ base: "sm", sm: "md" }}
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "gray.400")}
                    >
                        username@mail.com
                    </Center>
                    <FormControl>
                        <Center>
                            <HStack>
                                <PinInput>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </Center>
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bg={"blue.400"}
                            colorScheme="green"
                            _hover={{
                                bg: "blue.500",
                            }}
                        >
                            Verify
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
    );
}
