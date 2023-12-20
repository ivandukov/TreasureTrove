import FeaturedCardGrid from "./featured/FeaturedCardGrid";
import Navbar from "../Navbar";
import FilterBar from "../filter/FilterBar.tsx";
import {Stack} from "@chakra-ui/react";

/**
 *
 * @returns
 */
export default function LoggedInHomepage() {
    return (
        <>
            <Navbar isLoggedIn={true}/>
            <FilterBar/>
            <Stack
                spacing={6}
                mx={'auto'}
                mt={4}
                mb={4}
                p={6}
            >
                <FeaturedCardGrid/>
            </Stack>
        </>
    );
}