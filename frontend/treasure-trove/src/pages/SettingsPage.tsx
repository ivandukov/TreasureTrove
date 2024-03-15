import {
    Box, Button, Divider, FormControl, FormLabel, Heading, Input, Link, Select, SimpleGrid, Stack, Switch, Tab, TabIndicator,
    TabList, TabPanel, TabPanels, Tabs, useColorMode
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ChangePasswordButton from "../components/settings/ChangePasswordButton.tsx";
import DeleteAccountButton from "../components/settings/DeleteAccountButton.tsx";
import ThemeSwitcher from "../components/settings/ThemeSwitcher.tsx";
import Dropzone from "../components/Dropzone.tsx";

const TAB_NAMES = ['Account', 'Profile', 'Safety & Privacy', 'Notifications', 'Preferences', 'Help'];

/**
 * 
 * @returns 
 */
function AccountSettings() {

    const { colorMode } = useColorMode();

    return (
        <Box
            borderWidth="1px"
            borderRadius="md"
            p={5}
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            w="80%"
        >
            <Stack spacing={3}>
                <Heading as='h3' size='lg'>Account</Heading>
                <Stack>
                    <Heading as='h5' size='sm'>Username</Heading>
                    <Input w="30%"/>
                </Stack>

                <Stack>
                    <Heading as='h5' size='sm'>Email address</Heading>
                    <Input w="30%"/>
                </Stack>

                <Stack spacing={3}>
                    <Heading as='h5' size='sm'>Change Password</Heading>
                    <ChangePasswordButton/>
                </Stack>

                <Stack spacing={3}>
                    <Heading as='h5' size='sm'>Delete Account</Heading>
                    <Box>
                        <DeleteAccountButton/>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

/**
 * 
 * @returns 
 */
function ProfileSettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                borderWidth="1px"
                borderRadius="md"
                p={5}
                w="80%"
            >
                <Stack spacing={3}>
                    <Heading as='h3' size='lg'>Profile</Heading>
                    <Stack>
                        <Heading as='h5' size='sm'>Display Name</Heading>
                        <Input w="30%"/>
                    </Stack>
                    <Stack w="50%">
                        <Heading as='h5' size='sm'>Profile Picture</Heading>
                        <Dropzone/>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

/**
 * 
 * @returns 
 */
function SafetyPrivacySettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                borderWidth="1px"
                borderRadius="md"
                p={5}
                w="80%"
            >
                <Stack spacing={4}>
                    <Heading as='h3' size='lg'>
                        Safety & Privacy
                    </Heading>
                    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 2 }} spacing={3}>
                        <FormLabel htmlFor='activity'>
                            Personalize Feed based on your activity
                        </FormLabel>
                        <Switch id='activity' size='lg' />
                        <FormLabel htmlFor='history'>
                            Personalize Feed based on your search history
                        </FormLabel>
                        <Switch id='history' size='lg' />
                    </FormControl>

                    <Stack spacing={3}>
                        <Heading as='h5' size='sm'>Request all my data</Heading>
                        <Box>
                            <Button>Request Data</Button>
                        </Box>
                    </Stack>
                    <Divider />
                    <Stack spacing={4}>
                        <Box>
                            <Link href='https://chakra-ui.com' isExternal>
                                Terms of Use <ExternalLinkIcon mx='4px' />
                            </Link>
                        </Box>
                        <Box>
                            <Link href='https://chakra-ui.com' isExternal>
                                Privacy Policy <ExternalLinkIcon mx='4px' />
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

/**
 * 
 * @returns 
 */
function NotificationSettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={5}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="80%"
            >
                <Stack>
                    <Heading as='h3' size='lg'>Notifications</Heading>
                    <Divider/>
                    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 2 }} spacing={3}>
                        <FormLabel mb='0'>
                            Push notifications
                        </FormLabel>
                        <Switch size='lg'/>
                        <FormLabel mb='0'>
                            Email alerts
                        </FormLabel>
                        <Switch size='lg'/>
                        <FormLabel mb='0'>
                            Recommendations
                        </FormLabel>
                        <Switch size='lg'/>
                    </FormControl>
                </Stack>
            </Box>
        </>
    );
}

/**
 * 
 * @returns 
 */
function PreferencesSettings() {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={5}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="80%"
            >
                <Stack>
                    <Heading as='h3' size='lg'>Preferences</Heading>
                    <Divider />
                    <Heading as='h5' size='sm'>Language</Heading>
                    <Select w="30%">
                        <option>English (English)</option>
                        <option>Français (French)</option>
                        <option>Deutsch (German)</option>
                        <option>Nederlands (Dutch)</option>
                    </Select>
                    <Heading as='h5' size='sm'>Theme</Heading>
                    <Divider />
                    <ThemeSwitcher />
                </Stack>
            </Box>
        </>
    );
}

/**
 * 
 * @returns 
 */
function Help() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={3}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="80%"
            >
                <Stack>
                    <Heading as='h3' size='lg'>Help</Heading>
                    <Divider/>
                </Stack>
            </Box>
        </>
    );
}

/**
 * 
 * @returns JSX element
 */
export default function UserSettingsPage() {

    return (
        <>
            <Box>
                <Stack>
                    <Heading>Settings</Heading>
                    <Tabs position="relative" variant="unstyled">
                        <TabList>
                            {TAB_NAMES.map((tabName) => (
                                <Tab key={tabName}>{tabName}</Tab>
                            ))}
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="green.500"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <AccountSettings />
                            </TabPanel>
                            <TabPanel>
                                <ProfileSettings />
                            </TabPanel>
                            <TabPanel>
                                <SafetyPrivacySettings />
                            </TabPanel>
                            <TabPanel>
                                <NotificationSettings />
                            </TabPanel>
                            <TabPanel>
                                <PreferencesSettings />
                            </TabPanel>
                            <TabPanel>
                                <Help />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Box>
        </>
    );
}