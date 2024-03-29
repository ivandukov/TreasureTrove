import { 
    Box, Button, FormControl, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Radio, 
    RadioGroup, Select, Stack, Textarea, useColorMode, useDisclosure 
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import NewFilterModal from "../components/filter/NewFilterModal";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

interface LocationSearchBarProps {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
    register: UseFormRegister<FieldValues>;
}

function LocationSearchBar({onOpen, isOpen, onClose, register} : LocationSearchBarProps) {
    return (
        <InputGroup>
            <Input 
                placeholder="City/Postal Code"
                {...register("location")}
            />
            <InputRightElement>
                <IconButton icon={<FaLocationDot />} onClick={onOpen} aria-label="Location"/>
            </InputRightElement>
            <NewFilterModal isOpen={isOpen} onClose={onClose}/>
        </InputGroup>
    );
}

/**
 * renders the Page for creating a new advertisement,
 * For using forms with ChakraUI, see https://chakra-ui.com/getting-started/with-hook-form
 * @returns JSX element
 */
export default function CreateGiveawayPage() {

    const { colorMode } = useColorMode();
    const { onOpen, isOpen, onClose } = useDisclosure();

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm();

    function onSubmit(values: any): Promise<void> {

        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000)
        })
        // TODO: Navigate to GiveawayPage
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <Heading as="h2" fontSize={"xl"} pl={2}>
                        Create advertisement
                    </Heading>
                    <Box
                        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                        borderWidth="1px"
                        borderRadius="md"
                        p={5}
                    >
                        <Stack>
                            <RadioGroup defaultValue='1' colorScheme="green">
                                <HStack>
                                    <Radio value='1'>Giveaway</Radio>
                                    <Radio value='2'>Request</Radio>
                                </HStack>
                            </RadioGroup>
                            <HStack>
                                <FormControl isRequired>                         
                                    <Input 
                                        id='title' 
                                        placeholder='Title'
                                        {...register("title", {
                                            required: "This is required",
                                            minLength: { value: 4, message: "Minimum length should be 4" },
                                        })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <LocationSearchBar 
                                        onOpen={onOpen} 
                                        onClose={onClose} 
                                        isOpen={isOpen} 
                                        register={register}
                                    />
                                </FormControl>    
                                <FormControl>
                                    <Select 
                                        {...register("category")}
                                    >
                                        <option value='books'>Books</option>
                                        <option value='fashion'>Fashion</option>
                                        <option value='furniture'>Furniture</option>
                                    </Select>
                                </FormControl>
                            </HStack>
                            <FormControl>
                                <Textarea 
                                    id='description' 
                                    placeholder='Description'
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
        </>
    );
}