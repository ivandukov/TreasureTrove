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
                    <Link href="/register">Register</Link>
                    <Link 
                        href="/login" 
                        style={{textDecoration: 'none'}} 
                        _focus={{boxShadow: 'none'}}
                    >
                        <Button colorScheme="green">Login</Button>
                    </Link>
                </HStack>
                <FilterBar/>
                <Footer/>
            </Stack>
        </>
    );
}