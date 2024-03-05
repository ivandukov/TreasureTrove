import { Box, Button, FormControl, HStack, Heading, Input, Radio, RadioGroup, Stack, Textarea, useColorMode } from "@chakra-ui/react";

/**
 * renders the Page for creating a new advertisement
 * TODO: Turn this Page into a Form
 * @returns JSX element
 */
export default function CreateGiveawayPage() {

    const { colorMode } = useColorMode();

    return (
        <>
            <Stack>
                <Heading as="h2" fontSize={"xl"} pl={2}>
                    Create advertisement
                </Heading>
                <Box
                    bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                    borderWidth="1px"
                    borderRadius="md"
                    p={5}
                >
                    <Stack>
                        <RadioGroup defaultValue='1'>
                            <HStack>
                                <Radio value='1'>Giveaway</Radio>
                                <Radio value='2'>Request</Radio>
                            </HStack>
                        </RadioGroup>

                        <Input placeholder='Title' w="30%"/>

                        <Textarea placeholder='Description'/>

                        <HStack>
                            <Button>Save Draft</Button>
                            <Button type="submit" colorScheme="green">Post</Button>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
}