import {
    Box,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading,
    Spacer,
    Stack,
    StackDivider,
    Switch,
    Text,
    useColorMode,
} from "@chakra-ui/react";

/**
 * displays settings regarding notifications
 *
 * @returns JSX element
 */
export function NotificationSettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Card
                bg={colorMode === "dark" ? "gray.800" : "white"}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size="md">Notifications</Heading>
                    <Text pt="2" fontSize="s">
                        Receive notifications about TreasureTrove updates.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Email</Heading>
                                    <Text pt="2" fontSize="s">
                                        Receive email updates on giveaways you
                                        saved
                                    </Text>
                                </Box>
                                <Spacer />
                                <Switch size="lg" colorScheme="green" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Browser</Heading>
                                    <Text pt="2" fontSize="s">
                                        Receive direct messages in your Browser
                                    </Text>
                                </Box>
                                <Spacer />
                                <Switch size="lg" colorScheme="green" />
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">SMS</Heading>
                                    <Text pt="2" fontSize="s">
                                        Receive SMS updates on giveaways you
                                        saved
                                    </Text>
                                </Box>
                                <Spacer />
                                <Switch size="lg" colorScheme="green" />
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}
