import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { GoUpload } from "react-icons/go";

export default function Dropzone() {

    return (
        <>
            <Box
                border="2px dashed"
                borderRadius="md"
                p={4}
            >
                <Stack align="center">
                    <GoUpload />
                    <Text>
                        <Link fontWeight="bold">Click to upload</Link> or drag and drop
                    </Text>
                    <Text>PNG or JPG up to 2MB</Text>
                </Stack>
            </Box>
        </>
    );
}