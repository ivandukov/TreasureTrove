import {Stack} from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar.tsx";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";
import SimpleSidebar from "./Sidebar.tsx";

/**
 *
 * @returns
 */
export default function LoggedOutHomepage() {
    return (
        <>
           <SimpleSidebar>
            <Stack
                spacing={6}
                mx={'auto'}
                mt={4}
                mb={4}
                p={6}
                w={{base: "100%", md: "80%", xl: "80%"}}
            >
                <FilterBar/>
                <FeaturedCardGrid/>
            </Stack>
            </SimpleSidebar>
        </>
    );
}