import {Box, Heading, Input, Stack, VStack} from "@chakra-ui/react";
import OpenStreetMap from "../map/OpenStreetMap";

export function NewFilterForm() {

    return (
        <Stack spacing={4}>
            <VStack alignItems={'start'}>
                <Heading as="h2" fontSize={"md"} pl={2}>Filter name</Heading>
                <Input placeholder='Couch/Frankfurt-10km'/>
            </VStack>
            <VStack alignItems={'start'}>
                <Heading as="h2" fontSize={"md"} pl={2}>Keywords</Heading>
                <Input placeholder='Red Couch in Good Condition'/>
            </VStack>
            <VStack alignItems={'start'}>
                <Heading as="h2" fontSize={"md"} pl={2}>Categories</Heading>
                <Input placeholder='Furniture'/>
            </VStack>
            <VStack alignItems={'start'}>
                <Heading as="h2" fontSize={"md"} pl={2}>Location</Heading>
                <Box h={72} w={'100%'}>
                    <OpenStreetMap/>
                </Box>
            </VStack>
        </Stack>
    )

}