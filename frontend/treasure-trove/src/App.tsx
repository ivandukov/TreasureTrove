import Sidebar from "./components/Sidebar.tsx";
import {Stack} from "@chakra-ui/react";
import AppRouter from "./Router.tsx";


/**
 * defines all accessible links/pages
 * @returns Router containing all links to the pages
 */
export default function App() {

    return (
        <Sidebar>
            <Stack
                spacing={6}
                mx={'auto'}
                mt={4}
                mb={4}
                p={6}
                w={{base: "100%", md: "80%", xl: "80%"}}
            >
                <AppRouter/>
            </Stack>
        </Sidebar>
    );
}