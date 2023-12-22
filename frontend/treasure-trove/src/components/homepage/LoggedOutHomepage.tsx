import FilterBar from "../filter/FilterBar.tsx";
import FeaturedCardGrid from "./featured/FeaturedCardGrid";

/**
 *
 * @returns
 */
export default function LoggedOutHomepage() {
    return (
        <>
            <FilterBar/>
            <FeaturedCardGrid/>
        </>
    );
}