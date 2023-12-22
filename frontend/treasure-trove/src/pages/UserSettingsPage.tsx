import {Box, useColorMode} from "@chakra-ui/react";

export default function UserSettingsPage() {
    const {colorMode} = useColorMode();
    return (
        <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.200'}>
            Settings
        </Box>
    );
}