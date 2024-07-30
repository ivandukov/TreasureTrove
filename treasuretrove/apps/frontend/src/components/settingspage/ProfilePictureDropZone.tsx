import { Avatar, Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { createRef, useState } from "react";
import { GoUpload } from "react-icons/go";

/**
 * renders a dashed box which allows the user to upload a profile picture
 * @see https://tolgee.io/blog/manage-user-avatar
 * @returns {JSX.Element} JSX element
 */
export default function ProfilePictureDropZone() {
    /**
     * @type {React.RefObject<HTMLInputElement>}
     */
    const fileRef = createRef<HTMLInputElement>();

    const [uploadedImage, setUploadedImage] = useState<string | undefined>(
        undefined,
    );

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setUploadedImage(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Stack align="center">
                <Avatar size="2xl" src={uploadedImage} />
                <Box border="2px dashed" w="390px" borderRadius="md" p={4}>
                    <Stack align="center">
                        <GoUpload />
                        <input
                            type="file"
                            style={{ display: "none" }}
                            accept="image/png,image/jpeg,image"
                            ref={fileRef}
                            onChange={handleFileUpload}
                        />
                        <Text>
                            <Link
                                fontWeight="bold"
                                onClick={() => fileRef.current?.click()}
                            >
                                Click to upload
                            </Link>{" "}
                            or drag and drop
                        </Text>
                        <Text>PNG or JPG up to 2MB</Text>
                    </Stack>
                </Box>
            </Stack>
    );
}
