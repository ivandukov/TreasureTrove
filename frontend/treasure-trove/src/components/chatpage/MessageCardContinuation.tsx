import { Text, useColorModeValue, Box } from "@chakra-ui/react";

export function MessageCardContinuation() {
    return (
        <>
            <Box _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}>
                <Text marginLeft="81px">We can bring a truck</Text>
            </Box>
        </>
    );
}
