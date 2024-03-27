import { 
    Box, Button, Divider, Flex, FormControl, HStack, Heading, Icon, IconButton, Link, Menu, MenuButton, 
    MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, 
    ModalOverlay, Spacer, Stack, Text, Textarea, useColorMode, useDisclosure 
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsShare, BsFlag } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { EmailIcon } from "@chakra-ui/icons";

import FilterBar from "../components/filter/FilterBar.tsx";
import ImageCarousel from "../components/ImageCarousel.tsx";
import SaveButton from "../components/SaveButton.tsx";
import Footer from "../components/Footer";

import { useForm } from "react-hook-form";

/**
 * renders a small Dropdown-Button with three options:
 * - Share
 * - Not Interested
 * - Report
 * @returns JSX element
 */
function DropDownButton() {

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<Icon as={BsThreeDotsVertical}/>}
                variant="ghost"
                colorScheme="gray"
            />
            <MenuList>
                <MenuItem icon={<Icon as={BsShare}/>}>Share</MenuItem>
                <MenuItem icon={<Icon as={BsFlag}/>}>Report</MenuItem>
            </MenuList>
        </Menu>
    );
}

function MessageModal({onClose, isOpen} : {onClose: () => void, isOpen: boolean}) {

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
        // TODO: Close Modal
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>
                            Contact John Doe
                        </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <FormControl>
                                <Textarea
                                    id='message'  
                                    placeholder='Your message'
                                    {...register("message")}
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <HStack>           
                                <Button onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit" 
                                    colorScheme="green" 
                                    onClick={onSubmit} 
                                    isLoading={isSubmitting}
                                >
                                    Send
                                </Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    );
}

/**
 * 
 * @param param0 
 * @returns JSX element
 */
function GiveawayInfoBox({ productData }: { productData: any }) {

    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                borderWidth="1px"
                borderRadius="md"
                p={6}
                flex="1"
            >
                <Stack>
                    <Flex>
                        <Heading>
                            {productData.title}
                        </Heading>
                        <Spacer/>
                        <HStack>
                            <Stack>
                                <SaveButton/>
                            </Stack>
                            <Button onClick={onOpen}>
                                <Icon as={EmailIcon} mr={1}/>Contact
                            </Button>
                            <MessageModal 
                                onClose={onClose}
                                isOpen={isOpen}
                            />
                            <DropDownButton />
                        </HStack>
                    </Flex>
                    <Text fontSize="md" mr={2}>
                        by <Link fontWeight="bold" href="/user" mr={2}>{productData.user}</Link>
                    </Text>

                    <Text>
                        <Icon as={FaMapMarkerAlt} boxSize="13px" marginRight="5px"/>
                        {productData.postalCode}, {productData.location}
                    </Text>
                    <Text>
                        <Icon as={FaCalendar} boxSize="13px" marginRight="5px"/>
                        {productData.date}
                    </Text>
                    <Divider/>
                    <Heading as='h4' size='md'>
                        Description
                    </Heading>
                    <Text fontSize="lg">
                        {productData.description}
                    </Text>
                </Stack>
            </Box>
        </>
    );
}

/**
 * renders the page of a Giveaway Post
 * @returns JSX element
 */
export default function GiveawayPage() {

    // Sample data for the product giveaway
    const productData = {
        title: "Living Room Sofa",
        imageurl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description: "This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability.",
        user: "John Doe",
        date: "14.03.2024",
        giveawaystatus: "Reserved",
        location: "Offenbach am Main",
        postalCode: "14538",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            "https://as1.ftcdn.net/v2/jpg/02/51/57/50/1000_F_251575059_m18LpbUI2geMPGQlBd8m9FnKNXm9rytU.jpg",
            "https://www.thespruce.com/thmb/ryub34AWXXi4g0Or_I4OR6IZG0Y=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/FollowTheFlowGettyIages-dca5a16c80fa4ac39675b76496f0784d.jpg",
            "https://assets.kogan.com/files/product/2022/MBMARV2SSGA/dinal/MBMARV2SSGA-6.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
            "https://media.diy.com/is/image/KingfisherDigital/modern-loveseat-2-seater-velvet-sofa-with-2-bolster-pillows-for-living-room-guest-room-bedroom-office~9331601715668_01c_MP?$MOB_PREV$&$width=618&$height=618",
        ],
    };

    return (
        <Stack>
            <FilterBar/>
            <Box>
                <ImageCarousel images={productData.images}/>
            </Box>  
            <GiveawayInfoBox productData={productData}/>
            <Footer/>
        </Stack>
    );
}