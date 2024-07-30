import {
    Box,
    Button,
    FormControl,
    HStack,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LocationInput } from "./LocationInput";
import CategorySelect from "../CategorySelect";

/**
 * renders the Page for creating a new advertisement,
 * @see https://chakra-ui.com/getting-started/with-hook-form
 * @returns JSX element
 */
export default function CreateGiveawayPage() {
    const { colorMode } = useColorMode();
    const { onOpen, isOpen, onClose } = useDisclosure();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm();

    function onSubmit(values: object): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
        // TODO: Navigate to GiveawayPage
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <Heading as="h2" fontSize={"xl"} pl={2}>
                        Create advertisement
                    </Heading>
                    <Box
                        bg={colorMode === "dark" ? "gray.900" : "white"}
                        borderWidth="1px"
                        borderRadius="md"
                        p={5}
                    >
                        <Stack>
                            <RadioGroup defaultValue="1" colorScheme="green">
                                <HStack>
                                    <Radio value="1">Giveaway</Radio>
                                    <Radio value="2">Request</Radio>
                                </HStack>
                            </RadioGroup>
                            <HStack>
                                <FormControl isRequired={true}>
                                    <Input
                                        id="title"
                                        placeholder="Title"
                                        {...register("title", {
                                            required: "This is required",
                                            minLength: {
                                                value: 4,
                                                message:
                                                    "Minimum length should be 4",
                                            },
                                        })}
                                    />
                                </FormControl>
                                <FormControl w="50%">
                                    <LocationInput
                                        isOpen={isOpen}
                                        onOpen={onOpen}
                                        onClose={onClose}
                                        register={register}
                                    />
                                </FormControl>
                                <CategorySelect />
                            </HStack>
                            <FormControl>
                                <Textarea
                                    id="description"
                                    placeholder="Description"
                                    {...register("description")}
                                />
                            </FormControl>
                            <HStack>
                                <Button>Cancel</Button>
                                <Button>Save</Button>
                                <Button
                                    type="submit"
                                    colorScheme="green"
                                    onClick={onSubmit}
                                    isLoading={isSubmitting}
                                >
                                    Post
                                </Button>
                            </HStack>
                        </Stack>
                    </Box>
                </Stack>
            </form>
    );
}
