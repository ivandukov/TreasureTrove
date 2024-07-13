import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

/**
 * displays a separate box, which contains a hyperlink to the
 * LoginPage
 * @returns a JSX element containing the Link to the LoginPage
 */
export function LoginBox() {
    return (
        <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={5}
        >
            <Text align={"center"}>
                Already have an account?{" "}
                <Link color={"blue.400"} href="login">
                    Login
                </Link>
            </Text>
        </Box>
    );
}
