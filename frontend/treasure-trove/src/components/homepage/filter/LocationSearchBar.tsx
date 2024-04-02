import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

/**
 * displays search bar for locations with a button
 * that allows the user to select it with a map
 * @param onOpen hook
 * @returns JSX element
 */
export default function LocationSearchBar({ onOpen }: any) {
    return (
        <InputGroup w="30%">
            <Input placeholder="City/Postal Code"/>
            <InputRightElement>
                <IconButton icon={<FaLocationDot/>} onClick={onOpen} aria-label="Location"/>
            </InputRightElement>
        </InputGroup>
    );
}