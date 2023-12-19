import {Box, useColorMode} from "@chakra-ui/react";
import Footer from "../components/Footer";
import LoggedOutHomepage from "../components/homepage/LoggedOutHomepage.tsx";
import LoggedInHomepage from "../components/homepage/LoggedInHomepage.tsx";


/**
 * main function in this file defining the top-level component
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function HomePage() {

    const {colorMode} = useColorMode();
    const isLoggedIn = false;

    return (
        <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}>
            {isLoggedIn ? (
                // show this content when the user is logged in
                <LoggedInHomepage/>
            ) : (
                // show this content when the user is NOT logged in
                <LoggedOutHomepage/>
            )}
            <Footer/>
        </Box>
    )
}