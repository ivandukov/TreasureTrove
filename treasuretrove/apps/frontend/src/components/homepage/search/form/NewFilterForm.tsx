import { Box, Stack, VStack } from "@chakra-ui/react";
import OpenStreetMap from "../map/OpenStreetMap";

export function NewFilterForm() {
    return (
        <Stack spacing={4}>
            <VStack alignItems={"start"}>
                <Box h={72} w={"100%"}>
                    <OpenStreetMap />
                </Box>
            </VStack>
        </Stack>
    );
}
