import {Box, BoxProps, Button, CloseButton, Drawer, DrawerContent, Flex, FlexProps, Icon, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import {FiBookmark, FiHelpCircle, FiHome, FiMail, FiMenu, FiPlusSquare,} from 'react-icons/fi';
import {IconType} from 'react-icons';
import {ReactNode, ReactText} from 'react';

interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

/**
 *
 */
const LinkItems: Array<LinkItemProps> = [
    {name: 'Home', icon: FiHome, path: '/'},
    {name: 'Submit', icon: FiPlusSquare, path: '/submit'},
    {name: 'Saved', icon: FiBookmark, path: '/saved'},
    {name: 'Messages', icon: FiMail, path: '/messages'},
    {name: 'Help Center', icon: FiHelpCircle, path: '/settings'},
];

/**
 * renders a sidebar, which provides navigation
 * for the user
 * @returns JSX element
 */
export default function Sidebar({children}: { children: ReactNode }) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{base: 'none', md: 'block'}}
            />

            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose}/>
                </DrawerContent>
            </Drawer>

            <MobileNav display={{base: 'flex', md: 'none'}} onOpen={onOpen}/>

            <Box ml={{base: 0, md: 60}} p="4">
                {children}
            </Box>
        </Box>
    );
}

/**
 *
 */
interface SidebarProps extends BoxProps {
    onClose: () => void;
}

/**
 *
 * @param onClose lambda function
 * @returns
 */
const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Stack spacing={0} justifyContent={"space-between"} h={'100%'}>
                <Box>
                    <Flex h="20" alignItems="center" mx="8">
                        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                            Treasure
                            <Text as={'span'} color={'green.400'}>
                                Trove
                            </Text>
                        </Text>
                        <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
                    </Flex>

                    {LinkItems.map((link) => (
                        <NavItem key={link.name} icon={link.icon} path={link.path}>
                            {link.name}
                        </NavItem>
                    ))}
                </Box>

                <Stack px="4" my="4">
                    <Menu>
                        <MenuButton as={Button}>
                            <Text>John Doe</Text>
                        </MenuButton>
                        <MenuList>
                            <Link href="/user" style={{textDecoration: 'none'}}>
                                <MenuItem>
                                    Profile
                                </MenuItem>
                            </Link>
                            <Link href="/settings" style={{textDecoration: 'none'}}>
                                <MenuItem>
                                    Settings
                                </MenuItem>
                            </Link>
                            <MenuDivider/>
                            <MenuItem>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    );
};

/**
 *
 */
interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    path: string;
}

/**
 *
 * @param param0
 * @returns
 */
const NavItem = ({icon, children, path, ...rest}: NavItemProps) => {

    const isCurrentPath = location.pathname === path;

    return (
        <Link href={path} style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'green.500',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon} // TODO: fill this depending on the selected page
                    />
                )}
                <Text fontWeight={isCurrentPath ? 'bold' : 'normal'}>
                    {children}
                </Text>
            </Flex>
        </Link>
    );
};

/**
 *
 */
interface MobileProps extends FlexProps {
    onOpen: () => void;
}

/**
 *
 * @param param0
 * @returns
 */
const MobileNav = ({onOpen, ...rest}: MobileProps) => {
    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 24}}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu/>}
            />
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Treasure
                <Text as={'span'} color={'green.400'}>
                    Trove
                </Text>
            </Text>
        </Flex>
    );
};
