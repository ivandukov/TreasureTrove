import {
    Card, Heading, Link, Image, Stack, Text, Flex, Spacer
} from "@chakra-ui/react";
import { DropDownButton } from "../DropDownButton";
import { useState } from "react";

export function GiveawayFeedCard({ index, giveaway }: { index: number; giveaway: any; }) {

    const [isHovered, setIsHovered] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false); 

    const handleButtonClick = () => {
        setIsButtonClicked(true); 
    }

    return (
        <>
            <Card
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={index}
                p={3}
                h="200px"
                _hover={{
                    boxShadow: "lg",
                    transition: "box-shadow 0.1s",
                }}
            >
                <Stack>
                    <Link href="/giveaway" style={{ textDecoration: 'none' }}>
                        <Image
                            objectFit='cover'
                            src={giveaway.ImgUrl} />
                        <Heading size="sm" noOfLines={2}>
                            {giveaway.Title}
                        </Heading>
                    </Link>
                    <Flex>
                        <Text color="gray.500">
                            <Link href="/results">
                                {giveaway.Location}
                            </Link>
                        </Text>
                        <Spacer/>                      
                            {(isHovered || isButtonClicked)  && <DropDownButton />} 
                    </Flex>
                </Stack>
            </Card>
        </>
    );
}
