import {
    Divider, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsShare, BsFlag } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";

/**
 * renders a small Dropdown-Button with three options:
 * - Share
 * - Not Interested
 * - Report
 * @returns JSX element
 */
export function DropDownButton() {

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<Icon as={BsThreeDotsVertical}/>}
                variant="ghost"
                colorScheme="gray" 
            />
            <MenuList>
                <MenuItem icon={<Icon as={FiBookmark}/>}>Save</MenuItem>
                <MenuItem icon={<Icon as={BsShare}/>}>Share</MenuItem>
                <Divider/>
                <MenuItem icon={<Icon as={BsFlag}/>}>Report</MenuItem>               
            </MenuList>
        </Menu>
    );
}
