import { Box, Spinner, Stack, Text } from "@chakra-ui/react";
import Footer from "@components/homepage/Footer";
import SearchBar from "@components/homepage/search/SearchBar";
import { GiveawayInfoBox } from "./GiveawayInfoBox";
import ImageCarousel from "./ImageCarousel";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


/**
 * retrieves giveaways from database
 * @returns {Response} response - fetched data
 */
const fetchGiveaway = async (giveawayId: string) => {

    const giveawayUrl = `http://localhost:8080/giveaway/${giveawayId}`;

    try {
        const response = await fetch(giveawayUrl);

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

/**
 * renders the page of a Giveaway Post
 * @link https://stackoverflow.com/a/64238645
 * @returns JSX element
 */
export default function GiveawayPage() {

    const { id } = useParams();
    console.log(id);
    
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['giveaway'], 
        queryFn: () => fetchGiveaway(id!)
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

    console.log(data);

    return (
        <Stack>
            <SearchBar />
            <Box>
                <ImageCarousel images={data.giveaway.images} />
            </Box>
            <GiveawayInfoBox giveaway={data.giveaway} />
            <Footer />
        </Stack>
    );
}
