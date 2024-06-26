import { Box, Stack } from "@chakra-ui/react";
import SearchBar from "../homepage/search/SearchBar.tsx";
import ImageCarousel from "./ImageCarousel.tsx";
import Footer from "../homepage/Footer.tsx";

import { GiveawayInfoBox } from "./GiveawayInfoBox.tsx";

/**
 * renders the page of a Giveaway Post
 * @returns JSX element
 */
export default function GiveawayPage() {
    // Sample data for the product giveaway
    const productData = {
        title: "Living Room Sofa",
        imageurl:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description:
            "This is a high-quality sofa perfect for your living room. Its classic design complements both modern and traditional settings, making it an excellent addition to any home. Rest assured that this sofa has been well taken care of. It comes from a pet-free and smoke-free home, so you can bring it into your living space worry-free. The sturdy frame also ensures long-lasting durability.",
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
            <SearchBar />
            <Box>
                <ImageCarousel images={productData.images} />
            </Box>
            <GiveawayInfoBox productData={productData} />
            <Footer />
        </Stack>
    );
}
