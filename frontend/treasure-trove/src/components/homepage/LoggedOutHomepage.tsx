import Navbar from "../Navbar";
import {Stack} from "@chakra-ui/react";
import FilterBar from "../FilterBar";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";

/**
 *
 * @returns
 */
export default function LoggedOutHomepage() {
    return (
        <>
            <Navbar isLoggedIn={false}/>
            <Stack
                spacing={6}
                mx={'auto'}
                mt={4}
                mb={4}
                p={6}
                w={{base: "100%", md: "60%", xl: "60%"}}
            >
                <FilterBar/>
                <FeaturedCardGrid/>
            </Stack>
        </>
    );
}