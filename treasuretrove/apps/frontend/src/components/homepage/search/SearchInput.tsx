import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

/**
 * Input-element, which serves as Search Bar
 * @returns JSX element
 */
export default function SearchInput() {
    return (
        <InputGroup w="35%">
            <InputLeftElement>
                <SearchIcon />
            </InputLeftElement>
            <Input placeholder="Search TreasureTrove" />
        </InputGroup>
    );
}
