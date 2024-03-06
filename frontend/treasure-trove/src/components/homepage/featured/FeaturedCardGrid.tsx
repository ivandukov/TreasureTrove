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
            <Stack
                borderRadius="md"
                p={4}
                mb={6}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                spacing={6}
            >
                <SimpleGrid columns={{base: 1, sm: 1, md: 1}} spacing={6}>
                    {Array.from({length: 2}, (_, index) => (
                        <GiveawayCard
                            title="Green Sofa"
                            description="This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability."
                            postalCode="14538"
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
                            description="This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability."
                            postalCode="60259"
                            location="Frankfurt am Main"
                            imgUrl={"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            key={index}
                        />
                    ))}
                </SimpleGrid>
                <SimpleGrid columns={{base: 1, sm: 1, md: 1}} spacing={6}>
                    {Array.from({length: 2}, (_, index) => (
                        <GiveawayCard
                            title="Super Nintendo Entertainment System Console SNES + Super Mario + 2 Controllers + Cable"
                            description="This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability."
                            postalCode="53215"
                            location="Darmstadt"
                            imgUrl={"https://images.unsplash.com/photo-1591462392051-d3668711d52d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVyJTIwbmludGVuZG98ZW58MHx8MHx8fDA%3D"}
                            key={index}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    );
}