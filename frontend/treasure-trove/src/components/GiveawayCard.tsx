import {Box, Card, CardBody, Heading, HStack, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {BsFillXCircleFill, BsFlag, BsShare, BsThreeDotsVertical} from "react-icons/bs";

/**
 * renders a small Heart-Button, which can be toggled.
 * @returns JSX element
 */
const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <IconButton
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            icon={<Icon as={isFavorite ? FaHeart : FaRegHeart}/>}
            colorScheme={isFavorite ? 'red' : 'gray'}
            onClick={handleToggleFavorite}
        />
    );
};

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
                <MenuItem icon={<Icon as={BsFillXCircleFill}/>}>Not Interested</MenuItem>
                <MenuItem icon={<Icon as={BsFlag}/>}>Report</MenuItem>
            </MenuList>
        </Menu>
    );
}

/**
 * renders a Card containing information about a Giveaway as well as
 * a Favorite-Button and a Dropdown-Menu with additional actions such
 * as sharing or reporting
 * @param title string containing title of the Giveaway
 * @param authorname string containing the username of the person, who posted
 *                   this Giveaway
 * @returns JSX element
 */
export default function GiveawayCard({title, location, imgUrl}: { title: string, location: string, imgUrl: string }) {

    return (
        <Card
            direction={'row'}
        >
            <Image
                src={imgUrl}
                alt="Giveaway Image"
                boxSize='230px'
                objectFit='cover'
                borderRadius='md'
            />
            <CardBody>
                <HStack w={'100%'} h={'100%'} justifyContent={'space-between'}>
                    <Box>
                        <Heading size="md">
                            <Link href="/product">{title}</Link>
                        </Heading>
                        <Text color="gray.500">
                            <Link href="/user">{location}</Link>
                        </Text>
                        <Text color="gray.500">2 days ago</Text>
                    </Box>
                    <DropDownButton/>
                </HStack>
            </CardBody>
        </Card>
    );
}