import {
    Box,
    Heading,
    Stack,
    Text,
    Spinner,
    SimpleGrid,
} from "@chakra-ui/react";
import { GiveawayFeedCard } from "./GiveawayFeedCard";
import { useQuery } from "@tanstack/react-query";

/**
 * retrieves giveaways from database
 * @returns {Response} response - fetched data
 */
const fetchGiveaways = async () => {
    try {
        const response = await fetch("http://localhost:8080/giveaway");

        if (!response.ok) {
            throw new Error("Fetch failed");
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error('There has been a problem with the fetch operation: ', error);
        throw error; 
    }
};

type ColorMode = "light" | "dark";

interface Giveaway {
    ID: number;
    images: string[];
    title: string;
    location: string;
    description: string;
}

/**
 * renders Giveaways sorted by newest
 * To show raw JSON data on page, use: 
 * @example <Text>{JSON.stringify(data, null, 2)}</Text>
 * @param {ColorMode} colorMode
 * @returns JSX element
 */
export function NewestBox({ colorMode }: { colorMode: ColorMode }) {

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ["giveaways"],
        queryFn: fetchGiveaways
    });

    if (isLoading) {
        return (
            <Spinner />
        );
    }

    if (isError) {
        return (
            <Text>Error: {error.message}</Text>
        );
    }

    return (
        <Box
            bg={colorMode === "dark" ? "gray.800" : "white"}
            p={5}
            borderWidth="1px"
            borderRadius="md"
        >
            <Stack>
                <Heading size="md">New</Heading>
                <SimpleGrid minChildWidth="190px" spacing={3}>
                    {data.giveaways.map((giveaway: Giveaway, index: number) => (
                        <GiveawayFeedCard 
                            key={index} 
                            index={index} 
                            giveaway={giveaway}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    );
}
