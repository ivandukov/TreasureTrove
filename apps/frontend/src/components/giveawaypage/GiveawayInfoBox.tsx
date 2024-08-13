import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Heading,
    Icon,
    Link,
    Spacer,
    Stack,
    Text,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { EmailIcon } from "@chakra-ui/icons";
import { DropDownButton } from "@components/DropDownButton";
import SaveButton from "@components/SaveButton";
import { MessageModal } from "./MessageModal";

interface Giveaway {
    title: string;
    user: string;
    postalCode: string;
    location: string;
    date: string;
    description: string;
}

/**
 *
 * @param param0
 * @returns JSX element
 */
export function GiveawayInfoBox({ giveaway }: { giveaway: Giveaway }) {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg={colorMode === "dark" ? "gray.900" : "white"}
            borderWidth="1px"
            borderRadius="md"
            p={6}
            flex="1"
        >
                <Stack>
                    <Flex>
                        <Heading>{giveaway.title}</Heading>
                        <Spacer />
                        <HStack>
                            <Stack>
                                <SaveButton />
                            </Stack>
                            <Button onClick={onOpen}>
                                <Icon as={EmailIcon} mr={1} />
                                Contact
                            </Button>
                            <MessageModal onClose={onClose} isOpen={isOpen} />
                            <DropDownButton />
                        </HStack>
                    </Flex>
                    <Text fontSize="md" mr={2}>
                        by{" "}
                        <Link fontWeight="bold" href="/profile" mr={2}>
                            {giveaway.user}
                        </Link>
                    </Text>

                    <Text>
                        <Icon
                            as={FaMapMarkerAlt}
                            boxSize="13px"
                            marginRight="5px"
                        />
                        {giveaway.postalCode}, {giveaway.location}
                    </Text>
                    <Text>
                        <Icon
                            as={FaCalendar}
                            boxSize="13px"
                            marginRight="5px"
                        />
                        
                    </Text>
                    <Divider />
                    <Heading as="h4" size="md">
                        Description
                    </Heading>
                    <Text fontSize="lg">{giveaway.description}</Text>
                </Stack>
            </Box>
    );
}
