import {Box, useColorMode} from "@chakra-ui/react";
import Footer from "../components/Footer";
import LoggedOutHomepage from "../components/homepage/LoggedOutHomepage.tsx";


/**
 * main function in this file defining the top-level component
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export default function HomePage() {

    const {colorMode} = useColorMode();

    return (
        <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}>
            <LoggedOutHomepage/>
            <Footer/>
        </Box>
    )
}