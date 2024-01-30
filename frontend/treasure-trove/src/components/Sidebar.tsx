import {Box, BoxProps, CloseButton, Divider, Drawer, DrawerContent, Flex, FlexProps, Icon, IconButton, Link, Stack, Text, useColorModeValue, useDisclosure,} from '@chakra-ui/react';
import {FiCompass, FiHeart, FiHelpCircle, FiHome, FiMenu, FiSettings, FiUser,} from 'react-icons/fi';
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
    {name: 'Explore', icon: FiCompass, path: '/explore'},
    {name: 'Favourites', icon: FiHeart, path: '/favourites'},
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
 * @param param0 
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
            {...rest}>
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
                    <Divider/>
                    <NavItem key={'Profile'} icon={FiHelpCircle} path={'/user'}>
                        {'Help'}
                    </NavItem>
                    <NavItem key={'Profile'} icon={FiSettings} path={'/settings'}>
                        {'Settings'}
                    </NavItem>
                    <Divider/>
                    <NavItem key={'Profile'} icon={FiUser} path={'/user'}>
                        {'Profile'}
                    </NavItem>
                </Box>
                <Stack alignItems={"start"} pb={4}>
                    <Text px="8" fontWeight="semi-bold" fontSize="xs" color="gray.500" my="2">
                        © 2024 TreasureTrove
                    </Text>
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
                    bg: 'blue.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
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
            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Logo
            </Text>
        </Flex>
    );
};