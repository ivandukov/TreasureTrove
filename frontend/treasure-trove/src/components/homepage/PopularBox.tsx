import { 
    Box, Card, Heading, Icon, Link, Image, Stack, Text, Spinner, SimpleGrid 
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useQuery } from "react-query";

/**
 * retrieves giveaways from database
 * @returns {Response} response - fetched data
 */
const fetchGiveaways = async () => {
    const response = await fetch('http://localhost:8080/giveaway/');

    if(!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}

/**
 * renders Giveaways sorted by popularity (amount of saves by users)
 * To print out raw JSON data, use: <Text>{JSON.stringify(data, null, 2)}</Text>
 * @param {ColorMode} colorMode
 * @returns JSX element
 */
export function PopularBox({ colorMode }: any) {

    interface QueryError {
        message: string;
    }

    const { status, data, error } = useQuery<any, QueryError>({
        queryKey: ['giveaways'], 
        queryFn: fetchGiveaways
    });

    if(status === 'loading') {
        return (
            <>
                <Spinner/>
            </>
        );
    }
    
    if(status === 'error') {
        return (
            <>
                <Text>Error: {error.message}</Text>
            </>
        );
    }

    console.log(data);

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
                    <SimpleGrid minChildWidth='290px' spacing={3}>
                        {data.giveaways.map((giveaway: any, index: number) => (
                            <Card 
                                key={index} 
                                p={3}
                                _hover={{
                                    boxShadow: "lg",
                                    transition: "box-shadow 0.1s",
                                }}
                            >
                                <Stack>                               
                                    <Image
                                        objectFit='cover'
                                        src={giveaway.ImgUrl}
                                    />
                                    <Stack>
                                        <Heading size="sm" noOfLines={2}>
                                            {giveaway.Title}
                                        </Heading>
                                        <Text color="gray.500">
                                            <Link href="/results">
                                                <Icon
                                                    as={FaMapMarkerAlt}
                                                    boxSize="13px"
                                                    marginRight="3px"
                                                />
                                                7564, {giveaway.Location}
                                            </Link>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Box>
        </>
    );
}
