import {
    Divider,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
    BsThreeDotsVertical,
    BsShare,
    BsFlag,
    BsFillBookmarkFill,
} from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { ShareModal } from "./ShareModal";

/**
 * renders a small Dropdown button based on the condition
 * if the user is logged in or not
 * - Share
 * - Not Interested
 * - Report
 * @returns JSX element
 */
export function DropDownButton() {
    /**
     * TODO: Replace with proper Authentication State Management (Context or Redux?)
     * @see https://legacy.reactjs.org/docs/context.html#when-to-use-context
     * @see https://redux.js.org/
     */
    let isLoggedIn = true;

    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<Icon as={BsThreeDotsVertical} />}
                variant="ghost"
                colorScheme="gray"
            />
            <MenuList>
                {isLoggedIn ? (
                    <>
                        <MenuItem
                            icon={
                                isSaved ? (
                                    <Icon as={BsFillBookmarkFill} />
                                ) : (
                                    <Icon as={FiBookmark} />
                                )
                            }
                            onClick={handleSaveClick}
                        >
                            {isSaved ? "Saved" : "Save"}
                        </MenuItem>
                        <MenuItem icon={<Icon as={BsShare} />} onClick={onOpen}>
                            Share
                        </MenuItem>
                        <Divider />
                        <MenuItem icon={<Icon as={BsFlag} />}>Report</MenuItem>
                        <ShareModal isOpen={isOpen} onClose={onClose} />
                    </>
                ) : (
                    <MenuItem icon={<Icon as={BsShare} />}>Share</MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}
