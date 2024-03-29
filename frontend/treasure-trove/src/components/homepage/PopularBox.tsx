import { Box, Card, HStack, Heading, Icon, Link, Image, Stack, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

/**
 *
 * @returns JSX element
 */
export function PopularBox({ colorMode }: any) {
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                p={3}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">
                        Popular
                    </Heading>
                    <HStack>
                        {Array.from({ length: 3 }, (_, index) => (
                            <Card
                                p={3}
                                _hover={{
                                    boxShadow: "lg",
                                    transition: "box-shadow 0.1s",
                                }}
                            >
                                <Stack>
                                    <Image
                                        objectFit='cover'
                                        src='https://media.istockphoto.com/id/1161297624/de/foto/geparktes-fahrrad-in-den-sch%C3%B6nen-stra%C3%9Fen-von-pisa.jpg?s=612x612&w=0&k=20&c=d9vx2WANwgbJtfKYFDHKcH9Lc6ccpl3a_XBM5hT_hJE=' />
                                    <Stack>
                                        <Heading
                                            size="sm"
                                            noOfLines={2}
                                        >
                                            BICYCLES WAVE, 28 ZOLL, ALU, NEXUS, 7-GANG
                                        </Heading>
                                        <Text color="gray.500">
                                            <Link href="/results">
                                                <Icon
                                                    as={FaMapMarkerAlt}
                                                    boxSize="13px"
                                                    marginRight="3px" />
                                                7564, Stuttgart
                                            </Link>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Card>
                        ))}
                    </HStack>
                </Stack>
            </Box>
        </>
    );
}
