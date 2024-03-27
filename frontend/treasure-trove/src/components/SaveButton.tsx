import { Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";

/**
 * renders a "Save"-Button, which can be toggled.
 * @returns JSX-element
 */

export default function SaveButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavoriteClick() {
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            <Button
                aria-label="Toggle favorite"
                colorScheme={isFavorite ? 'red' : undefined}
                onClick={handleFavoriteClick}
                leftIcon={isFavorite ? <Icon as={BsBookmarkFill} /> : <Icon as={FiBookmark}/>}
            >
                {isFavorite ? 'Saved' : 'Save'}
            </Button>
        </>
    );
}