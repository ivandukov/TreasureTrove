import { Container, Link, Stack } from "@chakra-ui/react";

/**
 *
 * @returns JSX element
 */
export default function SmallFooter() {
    return (
        <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            spacing={4}
            justify={"center"}
            align={"center"}
        >
            <Stack direction={"row"} spacing={6}>
                <Link href={"#"}>Terms</Link>
                <Link href={"#"}>Privacy</Link>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Contact</Link>
            </Stack>
        </Container>
    );
}
