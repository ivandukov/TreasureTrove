import {
    Avatar, AvatarBadge, Box, Button, Card, CardBody, CardHeader, HStack, Heading,
    IconButton, Spacer,
    Stack, StackDivider, Text, useColorMode, useDisclosure
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { ProfilePictureModal } from "./ProfilePictureModal.tsx";

/**
 * displays settings regarding the profile:
 * - Display Name
 * - Profile Picture
 *
 * @returns JSX element
 */
export function ProfileSettings() {

    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Card
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size='md'>Profile</Heading>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>Display name</Heading>
                                    <Text pt='2' fontSize='s'>DonJoe99</Text>
                                </Box>
                                <Spacer />
                                <Button w="95px">Edit</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <Stack>
                                <Heading size='s'>Profile Picture</Heading>
                                <HStack>
                                    <Avatar size='2xl'>
                                        <AvatarBadge
                                            as={IconButton}
                                            size="sm"
                                            rounded="full"
                                            top="-3px"
                                            colorScheme="red"
                                            aria-label="remove Image"
                                            icon={<SmallCloseIcon />} />
                                    </Avatar>
                                    <Spacer />
                                    <Button w="95px" onClick={onOpen}>Change</Button>
                                    <ProfilePictureModal isOpen={isOpen} onClose={onClose} />
                                </HStack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}
