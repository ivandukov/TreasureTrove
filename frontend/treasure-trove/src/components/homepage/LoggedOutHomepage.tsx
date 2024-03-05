import { HStack, Link, Stack } from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar.tsx";
import Footer from "../Footer.tsx";

/**
 * 
 * @returns JSX element
 */
export default function LoggedOutHomepage() {

    return (
        <>
            <Stack>
                <HStack>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </HStack>
                <FilterBar/>
                <Footer/>
            </Stack>
        </>
    );
}