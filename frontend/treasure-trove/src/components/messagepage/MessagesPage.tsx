import {
    Avatar,
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Stack,
    Text,
    useColorMode,
} from "@chakra-ui/react";

/**
 * displays main information from a message
 * - user
 * - message
 * - giveaway/request
 * - date
 * @returns JSX element
 */
function MessageCard() {
    return (
        <>
            <Card>
                <CardHeader>
                    <Flex>
                        <Flex
                            flex="1"
                            gap="4"
                            alignItems="center"
                            flexWrap="wrap"
                        >
                            <Avatar name="Anna Doe" />
                            <Box>
                                <Heading size="sm">Anna Doe</Heading>
                                <Text noOfLines={1}>
                                    Hi, I'm quite interested in this giveaway.
                                    Could I pick it up next friday at around 5
                                    PM?
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>
            </Card>
        </>
    );
}

/**
 *
 * @returns JSX element
 */
export default function MessagePage() {
    const { colorMode } = useColorMode();

    return (
        <>
            <Heading>Messages</Heading>
            <Box
                bg={colorMode === "dark" ? "gray.900" : "white"}
                borderWidth="1px"
                borderRadius="md"
                p={8}
            >
                <Stack>
                    <MessageCard />
                    <MessageCard />
                    <MessageCard />
                </Stack>
            </Box>
        </>
    );
}
