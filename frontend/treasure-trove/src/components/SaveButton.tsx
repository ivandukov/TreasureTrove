import { Box, Button, Divider, Flex, Heading, Icon, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { BsThreeDotsVertical, BsShare, BsFillXCircleFill, BsFlag, BsFillBookmarkCheckFill, BsFillBookmarkFill, BsBookmarkCheckFill, BsBookmarkFill } from "react-icons/bs";


/**
 * renders a "Save"-Button, which can be toggled.
 * @returns JSX-element
 */

export default function SaveButton()
{
    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavoriteClick() {
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            <Box>
                <Button
                    aria-label="Toggle favorite"
                    colorScheme={isFavorite ? 'red' : undefined}
                    onClick={handleFavoriteClick}
                    leftIcon={isFavorite ? <Icon as={BsBookmarkFill}/> : <Icon as={FiBookmark}/>}
                >
                    {isFavorite ? 'Saved' : 'Save'}
                </Button>
            </Box>
        </>
    );
}