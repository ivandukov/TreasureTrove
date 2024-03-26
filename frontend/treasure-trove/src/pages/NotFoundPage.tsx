import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

/**
 * 
 * @returns JSX element
 */
export default function NotFoundPage() {

    return (
        <>
            <Stack align="center">
                <Heading size="2xl">404</Heading>
                <Text fontSize="18px">Page Not Found</Text>
                <Text color={'gray.500'}>
                    The page you&apos;re looking for does not seem to exist
                </Text>
                <Button colorScheme="green">
                    Go to Home
                </Button>
            </Stack>
        </>
    );
}