import { 
    Avatar, Button, Card, CardHeader, Divider, Flex, HStack, Heading, Icon, IconButton, Input, 
    InputGroup, 
    InputRightElement, 
    Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, useColorMode
} from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function DropDownButton() {

    return (
        <>
            <Menu>
                <MenuButton 
                    as={IconButton} 
                    icon={<Icon as={BsThreeDotsVertical}/>}
                    variant="ghost"
                    colorScheme="white"
                />
                <MenuList>
                    <MenuItem>View Profile</MenuItem>
                    <MenuItem>Clear Chat</MenuItem>
                    <MenuItem>Delete Chat</MenuItem>
                    <Divider/>
                    <MenuItem>Block</MenuItem>
                    <MenuItem>Report</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}

/**
 * 
 * @returns JSX element
 */
export default function ChatPage() {

    const { colorMode } = useColorMode();

    const [value, setValue] = useState('');

    const handleEmojiSelect = (emoji : any) => {
        setValue(value + emoji.native);
    };
    
    return (
        <>
            <Stack>                                        
                <Card>
                    <CardHeader>
                        <Flex>
                            <HStack spacing={5}>
                                <Avatar/>
                                <Stack>
                                    <Heading size='lg'>Green Sofa</Heading>
                                    <Heading size='md'>Jennie Doe</Heading>
                                </Stack>                             
                            </HStack>
                            <Spacer/>
                            <DropDownButton/>
                        </Flex>                       
                    </CardHeader>          
                </Card>
                <HStack>
                    <IconButton colorScheme="green" icon={BiPlus} aria-label={""}/>
                    <InputGroup>
                        <Input 
                            bg={colorMode === 'dark' ? 'gray.700' : 'white'} 
                            placeholder='Message Jennie Doe'
                            value={value}
                        />
                        <InputRightElement>
                        </InputRightElement>    
                    </InputGroup>
                    <Button colorScheme="green">Send</Button>
                    <EmojiPicker/>
                </HStack>
            </Stack>
        </>
    );
}