import { Stack } from "@chakra-ui/react";
import FilterBar from "../filter/FilterBar";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";

/**
 * 
 * @returns JSX element
 */
export default function LoggedInHomepage() {

    return (
        <>
            <Stack>
                <FilterBar/>
                <FeaturedCardGrid/>
            </Stack>
        </>
    );
}