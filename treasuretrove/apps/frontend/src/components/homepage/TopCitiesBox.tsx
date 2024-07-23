import { Box, Heading, Link, SimpleGrid, Stack } from "@chakra-ui/react";

/**
 *
 * @param {string} cityName name of a city
 * @returns JSX element
 */
function CityLink({ cityName }: { cityName: string }) {
    return (
        <>
            <Box>
                <Link>{cityName}</Link>
            </Box>
        </>
    );
}

/**
 *
 * @return JSX element
 */
export default function TopCitiesBox({ colorMode }: { colorMode: string }) {
    return (
        <>
            <Box
                bg={colorMode === "dark" ? "gray.800" : "white"}
                p={5}
                borderWidth="1px"
                borderRadius="md"
            >
                <Stack>
                    <Heading size="md">Top Cities</Heading>
                    <SimpleGrid columns={3} spacing={1}>
                        <CityLink cityName="Berlin" />
                        <CityLink cityName="Hamburg" />
                        <CityLink cityName="Bremen" />
                        <CityLink cityName="Köln" />
                        <CityLink cityName="Stuttgart" />
                        <CityLink cityName="München" />
                        <CityLink cityName="Dresden" />
                        <CityLink cityName="Leipzig" />
                        <CityLink cityName="Frankfurt" />
                    </SimpleGrid>
                </Stack>
            </Box>
        </>
    );
}
