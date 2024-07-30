import {
    Box,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading,
    Select,
    Spacer,
    Stack,
    StackDivider,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";


/**
 * displays settings regarding preferences:
 * - language
 * - theme (light, dark, system)
 *
 * @returns JSX element
 */
export function PreferencesSettings() {
    const { colorMode } = useColorMode();

    return (
        <Card
                bg={colorMode === "dark" ? "gray.800" : "white"}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size="md">Preferences</Heading>
                    <Text pt="2" fontSize="s">
                        Personalize your TreasureTrove experience.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Language</Heading>
                                    <Text pt="2" fontSize="s">
                                        Set the language
                                    </Text>
                                </Box>
                                <Spacer />
                                <Select w="30%">
                                    <option>English (English)</option>
                                    <option>Français (French)</option>
                                    <option>Deutsch (German)</option>
                                    <option>Nederlands (Dutch)</option>
                                </Select>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size="s">Theme</Heading>
                                    <Text pt="2" fontSize="s">
                                        Set theme
                                    </Text>
                                </Box>
                                <Spacer />
                                <ThemeSwitcher />
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
    );
}
