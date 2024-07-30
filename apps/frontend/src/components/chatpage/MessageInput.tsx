import {
    Button,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useColorMode,
} from "@chakra-ui/react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { BiPlus, BiSmile } from "react-icons/bi";
import { EmojiStyle } from "emoji-picker-react";

/**
 * TODO: Make Input grow downwards with longer text
 * @returns JSX element
 */
export function MessageInput() {
    const { colorMode } = useColorMode();
    const [inputValue, setInputValue] = useState("");
    const [showPicker, setShowPicker] = useState(false);

    const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
        setInputValue((prevInputValue) => prevInputValue + emojiData.emoji);
    };

    return (
        <HStack>
                <InputGroup>
                    <InputLeftElement>
                        <IconButton
                            aria-label="file"
                            icon={<BiPlus />}
                            variant="ghost"
                            colorScheme="white"
                        />
                    </InputLeftElement>
                    <Input
                        bg={colorMode === "dark" ? "gray.700" : "white"}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Message Jennie Doe"
                        value={inputValue}
                    />
                    <InputRightElement>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton
                                    aria-label="emoji"
                                    icon={<BiSmile />}
                                    variant="ghost"
                                    colorScheme="white"
                                    onClick={() => setShowPicker(!showPicker)}
                                />
                            </PopoverTrigger>
                            <PopoverContent>
                                <EmojiPicker
                                    emojiStyle={EmojiStyle.NATIVE}
                                    onEmojiClick={handleEmojiClick}
                                    lazyLoadEmojis={true}
                                />
                            </PopoverContent>
                        </Popover>
                    </InputRightElement>
                </InputGroup>
                <Button colorScheme="green">Send</Button>
            </HStack>
    );
}
