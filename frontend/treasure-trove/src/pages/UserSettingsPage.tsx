import { Box, Divider, FormControl, FormLabel, Heading, Input, Link, Select, Stack, Switch, Tab, TabIndicator, 
         TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ChangePasswordButton from "../components/settings/ChangePasswordButton.tsx";
import DeleteAccountButton from "../components/settings/DeleteAccountButton.tsx";
import ThemeSwitcher from "../components/settings/ThemeSwitcher.tsx";

const TAB_NAMES = ['Account', 'Safety & Privacy', 'Notifications', 'Preferences', 'Help'];

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
        >
            <Stack>
                <Heading as='h3' size='lg'>Account</Heading>
                <Divider />
                <Heading as='h5' size='sm'>Username</Heading>
                <Input />
                <Heading as='h5' size='sm'>Email address</Heading>
                <Input />
                <Heading as='h5' size='sm'>Change Password</Heading>
                <ChangePasswordButton/>
                <Heading as='h5' size='sm'>Delete Account</Heading>
                <Box>
                    <DeleteAccountButton />
                </Box>
            </Stack>
        </Box>
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
                borderWidth="1px"
                borderRadius="md"
                p={5}
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            >
                <Stack spacing={4}>
                    <Heading as='h3' size='lg'>Safety & Privacy</Heading>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Personalize Feed based on your activity
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Personalize Feed based on your search history
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                    <Divider />
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
            >
                <Stack>
                    <Heading as='h3' size='lg'>Notifications</Heading>
                    <Divider />
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0'>
                            Email alerts
                        </FormLabel>
                        <Switch id='email-alerts' />
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
            >
                <Stack>
                    <Heading as='h3' size='lg'>Preferences</Heading>
                    <Divider />
                    <Heading as='h5' size='sm'>Language</Heading>
                    <Select>
                        <option>English (English)</option>
                        <option>Français (French)</option>
                        <option>Deutsch (German)</option>
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
            >
                <Stack>
                    <Heading as='h3' size='lg'>Help</Heading>
                    <Divider />
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
                                <AccountSettings/>
                            </TabPanel>
                            <TabPanel>
                                <SafetyPrivacySettings/>
                            </TabPanel>
                            <TabPanel>
                                <NotificationSettings/>
                            </TabPanel>
                            <TabPanel>
                                <PreferencesSettings/>
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