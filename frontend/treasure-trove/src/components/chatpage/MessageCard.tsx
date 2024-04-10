import { Avatar, Flex, HStack, Text, Stack, useColorModeValue, Link } from "@chakra-ui/react";

export function MessageCard() {

    return (
        <>
            <Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
                >
                    <Avatar size="md" ml={4} />
                    <Flex direction="column" marginLeft="9px">
                        <HStack>
                            <Link as='b'>Jennie Doe</Link>
                            <Text fontSize='xs' color="gray.500">Today at 14:30</Text>
                        </HStack>
                        <Text>Hi, can we pick this up tomorrow?</Text>
                    </Flex>
                </Stack>
            </Stack>
        </>
    );
}
