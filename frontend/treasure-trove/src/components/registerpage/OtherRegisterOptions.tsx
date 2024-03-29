import { Divider, HStack, Text } from '@chakra-ui/react';
import { OAuthButtonGroup } from '../OAuthButtonGroup';

/**
 * displays registration options such as Google, Twitter etc.
 * @returns JSX element with various Sign in Options
 */
export function OtherRegisterOptions() {
    return (
        <>
            <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
                    or continue with
                </Text>
                <Divider />
            </HStack>
            <OAuthButtonGroup />
        </>
    );
}
