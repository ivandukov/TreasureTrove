import { 
    Box, Card, HStack, Heading, Icon, Link, Image, Stack, Text, Spinner 
} from "@chakra-ui/react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useQuery } from 'react-query';

/**
 * 
 * @returns 
 */
const fetchGiveaways = async () => {
    const response = await fetch('http://localhost:8080/giveaway/');

    if(!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}

/**
 *
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
                                            src='https://media.istockphoto.com/id/1342930425/de/foto/seitenansicht-eines-alten-retro-fernsehers.jpg?s=612x612&w=0&k=20&c=vtGb5DKmsADJKHJdPvS5IdoimHkry482DO-xkleIgw8='/>
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