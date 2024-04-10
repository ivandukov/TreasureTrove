import {
    
    
    Stack, useColorMode, Box
} from "@chakra-ui/react";
import { MessageCard } from "./MessageCard";
import { MessageCardContinuation } from "./MessageCardContinuation";
import { MessageInput } from "./MessageInput";

/**
 * 
 * @returns JSX element
 */
export default function ChatPage() {

    const { colorMode } = useColorMode();

    return (
        <>
            <Stack>
                <Box
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                    borderWidth="1px"
                    borderRadius="md"
                >
                    <MessageCard />
                    <MessageCardContinuation />
                    <MessageCard />
                    <MessageCardContinuation />
                    <MessageCardContinuation />
                </Box>
                <MessageInput/>
            </Stack>
        </>
    );
}