import { Avatar, Box, Button, Container, Heading, useColorMode } from "@chakra-ui/react";
import Footer from "../components/Footer";

/**
 * renders the page of the user-account
 * @returns JSX element
 */
export default function ProfilePage() {
    const isLoggedIn = false;
    const { colorMode } = useColorMode();

    return (
        <>
            <Footer/>
        </>
    );
}