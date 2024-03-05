import { Stack } from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar.tsx";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";

/**
 *
 * @returns
 */
export default function LoggedOutHomepage() {
    return (
        <>
            <Stack>
                <FilterBar/>
                <FeaturedCardGrid/>
            </Stack>

        </>
    );
}