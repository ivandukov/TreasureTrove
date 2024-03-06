import { Button, HStack, Link, Stack } from "@chakra-ui/react";
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
                    <Link href="/register" style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
                        <Button colorScheme="green">Register</Button>
                    </Link>
                </HStack>
                <FilterBar/>
                <Footer/>
            </Stack>
        </>
    );
}