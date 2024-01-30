import {Badge, Box, Container, Divider, Flex, Heading, Link, Text, useColorMode} from "@chakra-ui/react";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";

/**
 * Helper function to map the status to the color scheme
 * @param status string
 * @returns string containing the color for the badge
 */
function getStatusColor(status: string) {
    switch (status) {
        case "Open":
            return "green";
        case "Reserved":
            return "yellow";
        case "Closed":
            return "red";
        default:
            return "gray";
    }
}

/**
 * renders the page of a Giveaway Post
 * @returns JSX element
 */
export default function ProductPage() {
    const {colorMode} = useColorMode();
    const isLoggedIn = false;

    // Sample data for the product giveaway
    const productData = {
        title: "Living Room Sofa",
        imageurl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description: "This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability.",
        user: "John Doe",
        giveawaystatus: "Reserved",
        views: 152,
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            "https://as1.ftcdn.net/v2/jpg/02/51/57/50/1000_F_251575059_m18LpbUI2geMPGQlBd8m9FnKNXm9rytU.jpg",
            "https://www.thespruce.com/thmb/ryub34AWXXi4g0Or_I4OR6IZG0Y=/6720x0/filters:no_upscale():max_bytes(150000):strip_icc()/FollowTheFlowGettyIages-dca5a16c80fa4ac39675b76496f0784d.jpg",
            "https://thewondercottage.com/wp-content/uploads/2020/10/A122367C-4B5D-46AC-A0F5-C507CB358083.jpeg",
            "https://w7.pngwing.com/pngs/332/597/png-transparent-100-quality-badge-thumbnail.png",
            "https://cdn2.vectorstock.com/i/1000x1000/91/21/best-choose-premium-quality-badge-vector-2249121.jpg",
        ],
    };

    return (
        <Box bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}>
            <Container maxW='995px' mt={8} mb={5}>
                <Flex direction={{base: 'column', lg: 'row'}}>

                    <ImageGallery images={productData.images} numImagesToShow={5}/>

                    <Box
                        bg={colorMode === 'dark' ? 'gray.900' : 'white'}
                        flex="1"
                        borderWidth="1px"
                        borderRadius="md"
                        p={6}
                        ml={4}
                    >
                        <Heading mb={4}>
                            {productData.title}
                        </Heading>

                        <Flex align="center" mb={4}>
                            <Text fontSize="md" mr={2}>
                                by
                            </Text>
                            <Link fontWeight="bold" href="/user" mr={2}>
                                {productData.user}
                            </Link>
                            <Badge colorScheme={getStatusColor(productData.giveawaystatus)}>
                                {productData.giveawaystatus}
                            </Badge>
                        </Flex>

                        <Divider mb="5"/>
                        <Heading as='h4' size='md'>
                            Description
                        </Heading>
                        <Text fontSize="lg" mb={4} mt={4}>
                            {productData.description}
                        </Text>
                    </Box>
                </Flex>
                <Divider mb="5"/>
            </Container>
            <Footer/>
        </Box>
    );
}