import {Box, Button, Container, Heading, HStack, Stack, Text} from "@chakra-ui/react";

function App() {

    return (
        <Container h={"100%"}>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{base: 8, md: 14}}
                py={{base: 20, md: 36}}>
                <Heading
                    fontWeight={600}
                    fontSize={{base: '2xl', sm: '4xl', md: '8xl'}}
                    lineHeight={'110%'}>
                    Treasure <br/>
                    <Text as={'span'} color={'blue.400'}>
                        Trove
                    </Text>
                </Heading>
                <Text
                    fontSize={{base: 'sm', sm: 'md', md: 'lg'}}
                    color={'gray.500'}>
                    Discover, Share, and Unleash the Hidden Treasures Within.
                </Text>
            </Stack>
            <HStack spacing={8} justifyContent={"center"}>
                <Button size={"lg"}>Login</Button>
                <Button size={"lg"}>Register</Button>
            </HStack>

        </Container>
    )
}

export default App
