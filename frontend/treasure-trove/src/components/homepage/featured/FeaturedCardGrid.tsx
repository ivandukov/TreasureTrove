import {Box, Center, Heading, SimpleGrid, useColorMode} from "@chakra-ui/react";
import GiveawayCard from "../../GiveawayCard";
import Pagination from "../../Pagination";
/**
 * renders a Box containing multiple Cards each displaying
 * a Giveaway. For more information on the GiveawayCards,
 * see GiveawayCard.tsx
 * @returns JSX element
 */
export default function FeaturedCardGrid() {

    const {colorMode} = useColorMode();

    return (
        <Box>
            <Heading as="h2" fontSize={"xl"} my={2} pl={2}>Feed</Heading>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={4}
                mb={6}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            >
                <SimpleGrid columns={{base: 1, sm: 2, md: 2}} spacing={5}>
                    {Array.from({length: 8}, (_, index) => (
                        <GiveawayCard
                            title="Living Room Sofa"
                            authorname="Gordon Freeman"
                            key={index}
                        />
                    ))}
                </SimpleGrid>
                <Center pt={6}>
                    <Pagination/>
                </Center>
            </Box>
        </Box>
    );
}