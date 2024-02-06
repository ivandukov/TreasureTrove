import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../stylesheets/imagegallery.css';

interface ImageGalleryProps {
   images: string[];
   numImagesToShow: number;
}

/**
 * 
 * @param images 
 * @returns Image Gallery
 */
export default function ImageGallery({ images, numImagesToShow }: ImageGalleryProps) {

   const [selectedImage, setSelectedImage] = useState(images[0]);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [startDisplayIndex, setStartDisplayIndex] = useState(0);

   /**
    * 
    */
   const handlePrevious = () => {
      if(startDisplayIndex > 0) {
         setStartDisplayIndex((prev) => prev - 1);
      }
   };

   /**
    * 
    */
   const handleNext = () => {
      if(startDisplayIndex  < images.length - numImagesToShow) {
         setStartDisplayIndex((prev) => prev + 1);
      }
   };

   /**
    * renders a button, which allows the user to cycle to 
    * the images
    * @returns Flex with IconButton
    */
   function LeftNavButton() {
      return (
         <Flex className="left-navbutton">
            <IconButton
               aria-label="Previous Image"
               icon={<FiChevronLeft/>}
               onClick={handlePrevious}
               mr={2}
               disabled={currentIndex === 0}
            />
         </Flex>
      );
   }

   /**
    * renders a button, which allows the user to cycle to 
    * the images
    * @returns Flex with IconButton
    */
   function RightNavButton() {
      return (
         <Flex className="right-navbutton">
            <IconButton
               aria-label="Next Image"
               icon={<FiChevronRight/>}
               onClick={handleNext}
               ml={2}
               disabled={currentIndex === images.length - 1}
            />
         </Flex>
      );
   }

   /**
    * 
    * @param index 
    */
   const handleGalleryItemHover = (index: number) => {
      setSelectedImage(images[index]);
      setCurrentIndex(index);
   };

   return (
      <Box flex="1">
         <Flex justifyContent="center">
            <Image
               className="main-image"
               src={selectedImage}
               mb={4}
               alt="Selected Image"
               borderRadius="md"
            />
         </Flex>

         <Flex className="gallery" mb="5">
            <LeftNavButton/>
            {images.slice(startDisplayIndex, startDisplayIndex + numImagesToShow).map((image, index) => (
               <Image
                  className={`gallery-item ${index + startDisplayIndex === currentIndex ? 'active' : ''}`}
                  src={image}
                  onMouseEnter={() => handleGalleryItemHover(index + startDisplayIndex)}
                  key={index + startDisplayIndex}
                  mr={index !== numImagesToShow - 1 ? 2 : 0} 
                  alt={`Image ${index + startDisplayIndex}`}
               />
            ))}
            <RightNavButton/>
         </Flex>
      </Box>
   );
}