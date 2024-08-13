import {
    Card,
    Heading,
    Link,
    Image,
    Stack,
    Text,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import { DropDownButton } from "../DropDownButton";

interface Giveaway {
    images: string[];
    title: string;
    location: string;
}

interface GiveawayFeedCardProps {
    index: number;
    giveaway: Giveaway;
}

export function GiveawayFeedCard({ index, giveaway }: GiveawayFeedCardProps) {
    return (
        <Card
            key={index}
            p={3}
            _hover={{
                boxShadow: "lg",
                transition: "box-shadow 0.1s",
            }}
        >
            <Stack>
                <Link href="/giveaway" style={{ textDecoration: "none" }}>
                    <Image objectFit="cover" src={giveaway.images[0]} />
                    <Heading size="sm" noOfLines={2}>
                        {giveaway.title}
                    </Heading>
                </Link>
                <Flex>
                    <Text color="gray.500">
                        <Link href="/results">{giveaway.location}</Link>
                    </Text>
                    <Spacer />
                    <DropDownButton />
                </Flex>
            </Stack>
        </Card>
    );
}
