import { Box, Button, Card, CardBody, CardHeader, HStack, Heading, Icon, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar.tsx";
import Footer from "../Footer.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";

/**
 * 
 * @returns JSX element
 */
export default function LoggedOutHomepage() {

    const { colorMode } = useColorMode();

    /**
     * 
     * @returns JSX element
     */
    function NewestBox() {
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
                            New
                        </Heading>
                        <HStack>
                            {Array.from({ length: 3 }, (_, index) => (
                                <Link href="/giveaway">
                                    <Card 
                                        p={3}  
                                        _hover={{
                                            boxShadow: "xl",
                                            transition: "box-shadow 0.1s",
                                        }}
                                    >
                                        <Stack>
                                            <Image
                                                objectFit='cover'
                                                src='https://media.istockphoto.com/id/1342930425/de/foto/seitenansicht-eines-alten-retro-fernsehers.jpg?s=612x612&w=0&k=20&c=vtGb5DKmsADJKHJdPvS5IdoimHkry482DO-xkleIgw8='
                                            />
                                            <Stack>
                                                <Heading
                                                    size="sm"
                                                    noOfLines={2}
                                                >
                                                    Retro Tube TV Panasonic good condition
                                                </Heading>
                                                <Text color="gray.500">
                                                    <Link href="/results">
                                                        <Icon
                                                            as={FaMapMarkerAlt}
                                                            boxSize="13px"
                                                            marginRight="3px"
                                                        />
                                                        7564, Stuttgart
                                                    </Link>
                                                </Text>
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Link>
                            ))}
                        </HStack>
                    </Stack>
                </Box>
            </>
        );
    }

    /**
     * 
     * @returns 
     */
    function PopularBox() {
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
                                        boxShadow: "xl",
                                        transition: "box-shadow 0.1s",
                                    }}
                                >
                                    <Stack>
                                        <Image
                                            objectFit='cover'
                                            src='https://media.istockphoto.com/id/1161297624/de/foto/geparktes-fahrrad-in-den-sch%C3%B6nen-stra%C3%9Fen-von-pisa.jpg?s=612x612&w=0&k=20&c=d9vx2WANwgbJtfKYFDHKcH9Lc6ccpl3a_XBM5hT_hJE='
                                        />
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
                                                        marginRight="3px"
                                                    />
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

    /**
     * 
     */
    function TopCitiesBox() {
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
                            Top Cities
                        </Heading>
                        <SimpleGrid 
                            columns={2} 
                            spacing={1}
                        >
                            <Link>Berlin</Link>
                            <Link>Hamburg</Link>
                            <Link>Bremen</Link>
                            <Link>München</Link>
                            <Link>Frankfurt</Link>
                            <Link>Stuttgart</Link>
                            <Link>Köln</Link>
                            <Link>Dresden</Link>
                        </SimpleGrid>
                    </Stack>
                </Box>
            </>
        );
    }

    return (
        <>
            <Stack>
                <HStack>
                    <Link href="/register">Register</Link>
                    <Link
                        href="/login"
                        style={{ textDecoration: 'none' }}
                        _focus={{ boxShadow: 'none' }}
                    >
                        <Button colorScheme="green">Login</Button>
                    </Link>
                </HStack>
                <FilterBar />
                <NewestBox />
                <PopularBox />
                <TopCitiesBox />
                <Footer />
            </Stack>
        </>
    );
}