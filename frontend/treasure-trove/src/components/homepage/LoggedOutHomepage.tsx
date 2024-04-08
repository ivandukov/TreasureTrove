import { Button, HStack, Link, Stack, useColorMode } from "@chakra-ui/react";
import SearchBar from "./filter/SearchBar.tsx";
import Footer from "./Footer.tsx";
import { NewestBox } from "./NewestBox.tsx";
import { PopularBox } from "./PopularBox.tsx";
import TopCitiesBox from "./TopCitiesBox.tsx";

/**
 * 
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
                        style={{ textDecoration: 'none' }}
                        _focus={{ boxShadow: 'none' }}
                    >
                        <Button colorScheme="green">Login</Button>
                    </Link>
                </HStack>
                <SearchBar/>
                <NewestBox colorMode={colorMode}/>
                <PopularBox colorMode={colorMode}/>
                <TopCitiesBox colorMode={colorMode}/>
                <Footer/>
            </Stack>
        </>
    );
}