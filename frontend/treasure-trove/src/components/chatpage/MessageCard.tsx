import { Avatar, Flex, HStack, Text, Stack, useColorModeValue, Link, Menu, Icon, IconButton, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface MessageCardProps {
    username: string;
    messageText: string;
}

export function MessageCard({username, messageText} : MessageCardProps) {

    return (
        <>
            <Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
                >
                    <Link href="/profile">
                        <Avatar mt={1} mb={1} ml={4} />
                    </Link>
                    <Flex direction="column" marginLeft="9px">
                        <HStack>
                            <Link as='b' href="/profile">{username}</Link>
                            <Text fontSize='xs' color="gray.500">Today at 14:30</Text>
                        </HStack>
                        <Text>{messageText}</Text>                     
                    </Flex>                   
                </Stack>
            </Stack>
        </>
    );
}
