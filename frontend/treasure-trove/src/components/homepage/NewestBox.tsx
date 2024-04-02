import { 
    Box, Heading, Stack, Text, Spinner, Card, HStack, Icon, Image, Link 
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useQuery } from 'react-query';

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
 * renders Giveaways sorted by newest
 * To print out raw JSON data, use: <Text>{JSON.stringify(data, null, 2)}</Text>
 * @param {ColorMode} colorMode
 * @returns JSX element
 */
export function NewestBox({ colorMode }: any) {

    interface QueryError {
        message: string;
    }

    const { isLoading, isError, data, error } = useQuery<any, QueryError>({
        queryKey: ['giveaways'], 
        queryFn: fetchGiveaways
    });

    if(isLoading) {
        return (
            <Spinner/>
        );
    }
    
    if(isError) {
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
                p={3}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">
                        New
                    </Heading>
                    
                    <HStack>
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
                    </HStack>
                </Stack>
            </Box>
        </>
    );
}