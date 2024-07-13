import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

const providers = [
    { name: "Google", icon: <GoogleIcon boxSize="5" /> },
    { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
    { name: "GitHub", icon: <GitHubIcon boxSize="5" /> },
];

/**
 * renders three buttons for alternative login methods
 * such as Google, Twitter etc.
 * @returns JSX element (a combination of Javascript and HTML),
 *          which will be displayed in the browser
 */
export const OAuthButtonGroup = () => (
    <ButtonGroup variant="secondary" spacing="4">
        {providers.map(({ name, icon }) => (
            <Button key={name} flexGrow={1}>
                <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                {icon}
            </Button>
        ))}
    </ButtonGroup>
);
