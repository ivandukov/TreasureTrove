import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading,
    Spacer,
    Stack,
    StackDivider,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import ChangePasswordButton from "./ChangePasswordButton";
import DeleteAccountButton from "./DeleteAccountButton";


/**
 * displays settings regarding the account:
 * - username
 * - email adress
 * - password
 * - account deletion
 *
 * TODO: Extract each component into its own file
 *
 * @returns JSX element
 */
export default function AccountSettings() {
    const { colorMode } = useColorMode();

    return (
        <Card
                bg={colorMode === "dark" ? "gray.800" : "white"}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size="md">Account</Heading>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Username</Heading>
                                    <Text pt="2" fontSize="s">
                                        JohnDoe
                                    </Text>
                                </Box>
                                <Spacer />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Email address</Heading>
                                    <Text pt="2" fontSize="s">
                                        johndoe@mail.com
                                    </Text>
                                </Box>
                                <Spacer />
                                <Button w="95px">Change</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <Stack>
                                <Heading size="s">
                                    Password & Authentication
                                </Heading>
                                <ChangePasswordButton />
                            </Stack>
                        </Box>
                        <Box>
                            <Stack>
                                <Box>
                                    <Heading size="s">Account Removal</Heading>
                                    <Text pt="2" fontSize="s">
                                        Disabling your account means you can
                                        recover it at any time after taking this
                                        action.
                                    </Text>
                                </Box>
                                <HStack spacing={4}>
                                    <Button colorScheme="red">
                                        Disable Account
                                    </Button>
                                    <DeleteAccountButton />
                                </HStack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
    );
}
