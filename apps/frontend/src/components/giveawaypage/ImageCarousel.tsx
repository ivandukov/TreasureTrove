import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Image } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";

interface ImageCarouselProps {
    images: string[];
}

/**
 * @see https://stackoverflow.com/a/73617671
 * @see https://stackoverflow.com/a/73102784
 * @param {ImageCarouselProps} images - a list with image links
 * @returns JSX element
 */
export default function ImageCarousel({ images }: ImageCarouselProps) {
    /**
     * This affects the size of the whole component
     */
    const swiperStyle = {
        borderRadius: "6px",
        height: "360px",
    };

    const slideStyle = {
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const imageStyle = {
        borderRadius: "6px",
        height: "100%",
    };

    return (
        <Swiper
                cssMode={true}
                style={swiperStyle}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                simulateTouch={false}
                loop={true}
                spaceBetween={10}
            >
                {images.map((imageUrl: string, index: number) => (
                    <SwiperSlide key={index} style={slideStyle}>
                        <Image src={imageUrl} style={imageStyle} />
                    </SwiperSlide>
                ))}
            </Swiper>
    );
}
