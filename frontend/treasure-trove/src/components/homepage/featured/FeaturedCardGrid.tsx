import {Box, Heading, SimpleGrid, Stack, useColorMode} from "@chakra-ui/react";
import GiveawayCard from "../../GiveawayCard";

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
            <Stack
                borderWidth="1px"
                borderRadius="md"
                p={4}
                mb={6}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                spacing={6}
            >
                <SimpleGrid columns={{base: 1, sm: 1, md: 1}} spacing={6}>
                    {Array.from({length: 2}, (_, index) => (
                        <GiveawayCard
                            title="Living Room Sofa"
                            location="Offenbach am Main"
                            imgUrl={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                            key={index}
                        />
                    ))}
                </SimpleGrid>
                <SimpleGrid columns={{base: 1, sm: 1, md: 1}} spacing={6}>
                    {Array.from({length: 2}, (_, index) => (
                        <GiveawayCard
                            title="Living Room Sofa"
                            location="Offenbach am Main"
                            imgUrl={"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            key={index}
                        />
                    ))}
                </SimpleGrid>
                <SimpleGrid columns={{base: 1, sm: 1, md: 1}} spacing={6}>
                    {Array.from({length: 2}, (_, index) => (
                        <GiveawayCard
                            title="Super Nintendo Entertainment System Konsole SNES + NBA 97 + 2 Controller + Kabel"
                            location="Offenbach am Main"
                            imgUrl={"https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            key={index}
                        />
                    ))}
                </SimpleGrid>

            </Stack>
        </Box>
    );
}