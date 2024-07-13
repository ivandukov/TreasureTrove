import {
    Box,
    Heading,
    Stack,
    Text,
    Spinner,
    SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { GiveawayFeedCard } from "./GiveawayFeedCard";

/**
 * retrieves giveaways from database
 * @returns {Response} response - fetched data
 */
const fetchGiveaways = async () => {
    const response = await fetch("http://localhost:8080/giveaway/");

    if (!response.ok) {
        throw new Error("Fetch failed");
    }
    return response.json();
};

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

    const { status, data, error } = useQuery<any, QueryError>({
        queryKey: ["giveaways"],
        queryFn: fetchGiveaways,
    });

    if (status === "loading") {
        return (
            <>
                <Spinner />
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <Text>Error: {error.message}</Text>
            </>
        );
    }

    return (
        <>
            <Box
                bg={colorMode === "dark" ? "gray.800" : "white"}
                p={5}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">New</Heading>

                    <SimpleGrid minChildWidth="190px" spacing={3}>
                        {data.giveaways.map((giveaway: any, index: number) => (
                            <GiveawayFeedCard
                                index={index}
                                giveaway={giveaway}
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Box>
        </>
    );
}
