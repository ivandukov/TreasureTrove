import { Badge, Card, CardBody, CardFooter, Flex, Heading, HStack, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text } from "@chakra-ui/react";
import { BsFillXCircleFill, BsFlag, BsShare, BsThreeDotsVertical } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import SaveButton from "../components/SaveButton.tsx";

/**
 * renders a Card containing information about a Giveaway as well as
 * a Dropdown-Menu with additional actions such as sharing or reporting
 * TODO: Card still changes its size with differing title-length
 * @param {string} title title of the Giveaway
 * @param {string} postalCode postalCode of Giveaway 
 * @param {string} location city of Giveaway
 * @param {string} imgUrl first image of the giveaway
 * @returns JSX element
 */
export default function GiveawayCard({ title, description, postalCode, location, imgUrl }: { title: string, description: string, postalCode: string, location: string, imgUrl: string }) {

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
                    icon={<Icon as={BsThreeDotsVertical} />}
                    variant="ghost"
                    colorScheme="gray"
                />
                <MenuList>
                    <MenuItem icon={<Icon as={BsShare} />}>Share</MenuItem>
                    <MenuItem icon={<Icon as={BsFillXCircleFill} />}>Not Interested</MenuItem>
                    <MenuItem icon={<Icon as={BsFlag} />}>Report</MenuItem>
                </MenuList>
            </Menu>
        );
    }

    /**
     * renders the image of the giveaway
     * TODO: fix image size (230px looks better)
     * @param {string} imgUrl first image of the giveaway
     * @returns JSX element
     */
    function GiveawayImage({ imgUrl }: { imgUrl: string }) {
        return (
            <Link href="/product">
                <Image
                    src={imgUrl}
                    alt="Giveaway Image"
                    boxSize='260px'
                    objectFit='cover'
                    borderRadius='md'
                />
            </Link>
        );
    }

    /**
     * renders main information about Givaway
     * @param {string} title title of the Giveaway
     * @param {string} postalCode postalCode of Giveaway 
     * @param {string} location city of Giveaway
     * @returns JSX element
     */
    function GiveawayInformation({ title, description, postalCode, location }: { title: string, description: string, postalCode: string, location: string }) {

        return (
            <>
                <Stack>
                    <Heading size="md">
                        <Link href="/product">{title}</Link>
                    </Heading>
                    <Text noOfLines={2}>
                        {description}
                    </Text>
                    <Text color="gray.500">
                        <Link href="/product">
                            <Icon
                                as={FaMapMarkerAlt}
                                boxSize="13px"
                                marginRight="3px"
                            />
                            {postalCode}, {location}
                        </Link>
                    </Text>
                    <Text color="gray.500">2 days ago</Text>
                </Stack>
            </>
        );
    }

    return (
        <Card direction={'row'}>
            <GiveawayImage imgUrl={imgUrl}/>
            <CardBody>
                <HStack>
                    <Stack>
                        <GiveawayInformation
                            title={title}
                            description={description}
                            postalCode={postalCode}
                            location={location}
                        />
                        <Stack w="50%">
                            <SaveButton/>
                        </Stack>
                    </Stack>
                    <DropDownButton/>
                </HStack>
            </CardBody>
        </Card>
    );
}