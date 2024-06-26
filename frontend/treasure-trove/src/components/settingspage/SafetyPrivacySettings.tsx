import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading,
    Link,
    Spacer,
    Stack,
    StackDivider,
    Switch,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

/**
 * displays settings regarding the Privacy and Safety
 * of the user
 *
 * @returns JSX element
 */
export function SafetyPrivacySettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Card
                bg={colorMode === "dark" ? "gray.800" : "white"}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size="md">Safety & Privacy</Heading>
                    <Text pt="2" fontSize="s">
                        Personalize your TreasureTrove experience.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <HStack>
                                <Box>
                                    <Text pt="2" fontSize="s">
                                        Personalize Feed based on viewing
                                        activity.
                                    </Text>
                                </Box>
                                <Spacer />
                                <Switch size="lg" colorScheme="green" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Text pt="2" fontSize="s">
                                        Personalize Feed based on your search
                                        history
                                    </Text>
                                </Box>
                                <Spacer />
                                <Switch size="lg" colorScheme="green" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Text pt="2" fontSize="s">
                                        Request all collected data
                                    </Text>
                                </Box>
                                <Spacer />
                                <Button>Request Data</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <Stack spacing={5}>
                                <Box>
                                    <Link
                                        href="https://chakra-ui.com"
                                        isExternal
                                    >
                                        Terms of Use{" "}
                                        <ExternalLinkIcon mx="4px" />
                                    </Link>
                                </Box>
                                <Box>
                                    <Link
                                        href="https://chakra-ui.com"
                                        isExternal
                                    >
                                        Privacy Policy{" "}
                                        <ExternalLinkIcon mx="4px" />
                                    </Link>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}
