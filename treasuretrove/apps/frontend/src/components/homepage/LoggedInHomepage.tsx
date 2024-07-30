import { Stack, useColorMode } from "@chakra-ui/react";
import SearchBar from "./search/SearchBar";
import Footer from "./Footer";
import { NewestBox } from "./NewestBox";
import { PopularBox } from "./PopularBox";
import TopCitiesBox from "./TopCitiesBox";

/**
 * renders the page, the user sees when logged in
 *
 * @returns JSX element
 */
export default function LoggedInHomepage() {
    const { colorMode } = useColorMode();

    return (
        <Stack>
                <SearchBar />
                <NewestBox colorMode={colorMode} />
                <PopularBox colorMode={colorMode} />
                <TopCitiesBox colorMode={colorMode} />
                <Footer />
            </Stack>
    );
}
