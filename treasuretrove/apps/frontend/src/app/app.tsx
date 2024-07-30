// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Stack } from "@chakra-ui/react";
import Sidebar from "@components/Sidebar";
import AppRouter from "../Router";

export function App() {
    return (
        <Sidebar>
                <Stack 
                    spacing={6}
                    mx={"auto"}
                    mt={4}
                    mb={4}
                    p={6}
                    w={{ base: "100%", md: "80%", xl: "80%" }}
                >
                    <AppRouter/>
                </Stack>
            </Sidebar>
    );
}

export default App;