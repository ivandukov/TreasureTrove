import { Stack } from "@chakra-ui/react";
import React from "react";
import FilterBar from "../filter/FilterBar";

/**
 * 
 * @returns 
 */
export default function LoggedInHomepage() {

    return (
        <>
            <Stack>
                <FilterBar/>
            </Stack>
        </>
    );
}