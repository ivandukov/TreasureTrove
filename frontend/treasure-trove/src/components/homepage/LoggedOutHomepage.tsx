import { Box, Button, Card, HStack, Heading, Icon, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import FilterBar from "./filter/FilterBar.tsx";
import Footer from "../Footer.tsx";
import { FaMapMarkerAlt } from "react-icons/fa";

/**
 * 
 * @returns JSX element
 */
function NewestBox({colorMode} : {colorMode: string}) {
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                p={5}
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
                                            <Heading size="sm" noOfLines={2}>
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
 * @returns JSX element
 */
function PopularBox({colorMode} : {colorMode: string}) {
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                p={5}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">
                        Popular
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
 * @param {string} cityName name of a city
 * @returns JSX element 
 */
function CityLink({cityName} : {cityName: string}) {
    return (
        <>
            <Box>
                <Link>
                    {cityName}
                </Link>
            </Box>
        </>
    );
}

/**
 * 
 * @return JSX element
 */
function TopCitiesBox({colorMode} : {colorMode: string}) {
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                p={5}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">
                        Top Cities
                    </Heading>
                    <SimpleGrid columns={3} spacing={1}>
                        <CityLink cityName="Berlin"/>
                        <CityLink cityName="Hamburg"/>   
                        <CityLink cityName="Bremen"/>   
                        <CityLink cityName="Köln"/>   
                        <CityLink cityName="Stuttgart"/>   
                        <CityLink cityName="München"/>   
                        <CityLink cityName="Dresden"/>   
                        <CityLink cityName="Leipzig"/> 
                        <CityLink cityName="Frankfurt"/>   
                    </SimpleGrid>
                </Stack>                                               
            </Box>
        </>
    );
}

/**
 * 
 * @returns JSX element
 */
export default function LoggedOutHomepage() {

    const { colorMode } = useColorMode();

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
                <FilterBar/>
                <NewestBox colorMode={colorMode}/>
                <PopularBox colorMode={colorMode}/>
                <TopCitiesBox colorMode={colorMode}/>
                <Footer/>
            </Stack>
        </>
    );
}