import { Stack, RadioGroup, HStack, Radio, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import CategorySelect from "@components/CategorySelect";
import ImageDropZone from "@components/ImageDropZone";
import { FieldValues, UseFormRegister } from "react-hook-form";

/**
 * TODO: add image dropzone
 * TODO: add location picker
 * @param register {UseFormRegister<FieldValues>}
 * @returns JSX element
 */
export default function SubmitModalContent({ register }: { register: UseFormRegister<FieldValues> }) {

    return (
        <>
            <Stack>
                <FormControl as='fieldset'>
                    <FormLabel as='legend'>Type</FormLabel>
                    <RadioGroup defaultValue="1" colorScheme="green">
                        <HStack spacing={15}>
                            <Radio value="1">Giveaway</Radio>
                            <Radio value="2">Request</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Title</FormLabel>
                    <Input
                        id="title"
                        {...register("title", {
                            required: "This is required",
                            minLength: {
                                value: 4,
                                message: "Minimum length should be 4"
                            }
                        })}
                    />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        id="description"
                        placeholder="Description"
                        {...register("description", {
                            required: "This is required",
                            minLength: {
                                value: 4,
                                message: "Minimum length should be 4"
                            }
                        })}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <CategorySelect/>
                </FormControl>
                <ImageDropZone />
            </Stack>
        </>
    );
}