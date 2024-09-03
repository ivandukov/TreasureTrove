import { Box, Input, Link, Stack, Text, Image, HStack, SimpleGrid, Flex, Icon, IconButton, useColorMode, Button } from "@chakra-ui/react";
import { createRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GoUpload } from "react-icons/go";

export default function ImageDropZone() {

    const fileRef = createRef<HTMLInputElement>();

    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setUploadedImages(prevImages => [...prevImages, ...files.map(file => URL.createObjectURL(file))]);
    };

    const removeImageAtIndex = (index: number) => {
        setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };
    
    return (
        <>
            <Box border="2px dashed" borderRadius="md" p={3}>
                <Stack align="center">
                    <GoUpload />
                    <Input
                        type="file"
                        style={{ display: "none" }}
                        accept="image/png,image/jpeg,image"
                        ref={fileRef}
                        onChange={handleFileUpload}
                    />
                    <Text>
                        <Link fontWeight="bold" onClick={() => fileRef.current?.click()}>
                            Click to upload
                        </Link>{" "}
                        or drag and drop
                    </Text>
                    <Text>PNG or JPG up to 2MB</Text>
                </Stack>
            </Box>
            <SimpleGrid columns={3} gap={4} mt={3}>
                {uploadedImages.map((src, index) => (
                    <Stack>
                        <Image
                            key={index}
                            src={src}
                            objectFit="cover"
                            boxSize='120px'
                        />                   
                        <IconButton
                            icon={<Icon as={FaTrashAlt} />}
                            colorScheme='red'
                            aria-label="Remove image"
                            onClick={() => removeImageAtIndex(index)}               
                        />
                    </Stack>
                ))}
            </SimpleGrid>
        </>
    );
}