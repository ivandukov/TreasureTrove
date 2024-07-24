import { Button, HStack, Link, Stack, useColorMode } from "@chakra-ui/react";
import Footer from "./Footer";
import { NewestBox } from "./NewestBox";
import { PopularBox } from "./PopularBox";
import SearchBar from "./search/SearchBar";
import TopCitiesBox from "./TopCitiesBox";

/**
 * renders the page, the user sees when not
 * logged in
 * @returns JSX element
 */
export default function LoggedOutHomepage() {
    const { colorMode } = useColorMode();

    return (
        <>
            <Stack>
                <HStack>
                    <Link href="/register">Register</Link>
                    <Link
                        href="/login"
                        style={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <Button colorScheme="green">Login</Button>
                    </Link>
                </HStack>
                <SearchBar />
                <NewestBox colorMode={colorMode} />
                <PopularBox colorMode={colorMode} />
                <TopCitiesBox colorMode={colorMode} />
                <Footer />
            </Stack>
        </>
    );
}
