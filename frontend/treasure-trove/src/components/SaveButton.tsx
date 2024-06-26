import { Button, Icon } from "@chakra-ui/react";
import { BsBookmarkFill } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";

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
                colorScheme={isFavorite ? "red" : undefined}
                onClick={handleFavoriteClick}
                leftIcon={
                    isFavorite ? (
                        <Icon as={BsBookmarkFill} />
                    ) : (
                        <Icon as={FiBookmark} />
                    )
                }
            >
                {isFavorite ? "Saved" : "Save"}
            </Button>
        </>
    );
}
