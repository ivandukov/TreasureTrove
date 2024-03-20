import {
    Avatar, Box, Button, Card, CardBody, CardHeader, HStack, Heading, Link, 
    Select, Spacer, Stack, StackDivider, Switch, Tab, TabIndicator, TabList, 
    TabPanel, TabPanels, Tabs, Text, useColorMode
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ChangePasswordButton from "../components/settings/ChangePasswordButton.tsx";
import DeleteAccountButton from "../components/settings/DeleteAccountButton.tsx";
import ThemeSwitcher from "../components/settings/ThemeSwitcher.tsx";
import Dropzone from "../components/Dropzone.tsx";

const TAB_NAMES = ['Account', 'Profile', 'Safety & Privacy', 'Notifications', 'Preferences'];

/**
 * displays settings regarding the account:
 * - username
 * - email adress
 * - password
 * - account deletion
 * 
 * @returns JSX element
 */
function AccountSettings() {

    const { colorMode } = useColorMode();

    return (
        <>
            <Card
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size='md'>Account</Heading>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider/>} spacing='4'>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>Username</Heading>
                                    <Text pt='2' fontSize='s'>JohnDoe</Text>
                                </Box>
                                <Spacer/>
                                <Button w="95px">Edit</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>Email address</Heading>
                                    <Text pt='2' fontSize='s'>johndoe@mail.com</Text>
                                </Box>
                                <Spacer/>
                                <Button w="95px">Edit</Button>
                            </HStack>                                          
                        </Box>
                        <Box>
                            <Stack>
                                <Heading size='s'>Password & Authentication</Heading>
                                <ChangePasswordButton/>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack>
                                <Box>
                                    <Heading size='s'>Account Removal</Heading>
                                    <Text pt='2' fontSize='s'>
                                        Disabling your account means you can recover it at any time after taking this action.
                                    </Text>
                                </Box>
                                <HStack spacing={4}>
                                    <Button colorScheme="red">Disable Account</Button>
                                    <DeleteAccountButton/>
                                </HStack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}

/**
 * displays settings regarding the profile:
 * - Display Name
 * - Profile Picture
 * 
 * @returns JSX element
 */
function ProfileSettings() {

    const { colorMode } = useColorMode();

    return (
        <>
            <Card
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}                               
                w="75%"
                p={2}                
            >
                <CardHeader>
                    <Heading size='md'>Profile</Heading>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider/>} spacing='4'>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>Display name</Heading>
                                    <Text pt='2' fontSize='s'>DonJoe99</Text>
                                </Box>
                                <Spacer/>
                                <Button w="95px">Edit</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <Stack>
                                <Heading size='s'>Profile Picutre</Heading>
                                <HStack spacing={10}>
                                    <Avatar size='2xl'/>
                                    <Dropzone/>
                                </HStack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}

/**
 * displays settings regarding the Privacy and Safety
 * of the user
 * 
 * @returns JSX element
 */
function SafetyPrivacySettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Card
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}                
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size='md'>Safety & Privacy</Heading>
                    <Text pt='2' fontSize='s'>
                        Personalize your TreasureTrove experience.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider/>} spacing='4'> 
                        <Box>
                            <HStack>
                                <Box>                                   
                                    <Text pt='2' fontSize='s'>
                                        Personalize Feed based on viewing activity.
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Switch size='lg' colorScheme="green"/>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>  
                                    <Text pt='2' fontSize='s'>
                                        Personalize Feed based on your search history
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Switch size='lg' colorScheme="green"/>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Text pt='2' fontSize='s'>
                                        Request all collected data
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Button>Request Data</Button>
                            </HStack>
                        </Box>
                        <Box>
                            <Stack spacing={5}>
                                <Box>
                                    <Link href='https://chakra-ui.com' isExternal>
                                        Terms of Use <ExternalLinkIcon mx='4px'/>
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='https://chakra-ui.com' isExternal>
                                        Privacy Policy <ExternalLinkIcon mx='4px'/>
                                    </Link>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>    
                </CardBody>
            </Card>
        </>
    );
}

/**
 * displays settings regarding notifications
 * 
 * @returns JSX element
 */
function NotificationSettings() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Card               
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size='md'>Notifications</Heading>
                    <Text pt='2' fontSize='s'>
                        Receive notifications about TreasureTrove updates.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider/>} spacing='4'> 
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>
                                        Email
                                    </Heading>
                                    <Text pt='2' fontSize='s'>
                                        Receive email updates on giveaways you saved
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Switch size='lg' colorScheme="green"/>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>
                                        Browser
                                    </Heading>
                                    <Text pt='2' fontSize='s'>
                                        Receive direct messages in your Browser 
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Switch size='lg' colorScheme="green"/>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>
                                        SMS
                                    </Heading>
                                    <Text pt='2' fontSize='s'>
                                        Receive SMS updates on giveaways you saved
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Switch size='lg' colorScheme="green"/>
                            </HStack>
                        </Box>
                    </Stack>    
                </CardBody>
            </Card>
        </>
    );
}

/**
 * displays settings regarding preferences:
 * - Language
 * - Theme (light, dark, system)
 * 
 * @returns JSX element
 */
function PreferencesSettings() {
    const { colorMode } = useColorMode();

    return (
        <>
            <Card
                bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                w="75%"
                p={2}
            >
                <CardHeader>
                    <Heading size='md'>Preferences</Heading>
                    <Text pt='2' fontSize='s'>
                        Personalize your TreasureTrove experience.
                    </Text>
                </CardHeader>
                <CardBody mt={-5}>
                    <Stack divider={<StackDivider/>} spacing='4'> 
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>
                                        Language
                                    </Heading>
                                    <Text pt='2' fontSize='s'>
                                        Set the language
                                    </Text>
                                </Box>
                                <Spacer/>
                                <Select w="30%">
                                    <option>English (English)</option>
                                    <option>Français (French)</option>
                                    <option>Deutsch (German)</option>
                                    <option>Nederlands (Dutch)</option>
                                </Select>
                            </HStack>
                        </Box>
                        <Box>
                            <HStack>
                                <Box>
                                    <Heading size='s'>
                                        Theme
                                    </Heading>
                                    <Text pt='2' fontSize='s'>
                                        Set theme
                                    </Text>
                                </Box>
                                <Spacer/>
                                <ThemeSwitcher/>
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
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
                                <ProfileSettings/>
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
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Box>
        </>
    );
}