import {
    Box, Heading, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs
} from "@chakra-ui/react";
import AccountSettings from "../components/settingspage/AccountSettings.tsx";
import { ProfileSettings } from "../components/settingspage/ProfileSettings.tsx";
import { SafetyPrivacySettings } from "../components/settingspage/SafetyPrivacySettings.tsx";
import { NotificationSettings } from "../components/settingspage/NotificationSettings.tsx";
import { PreferencesSettings } from "../components/settingspage/PreferencesSettings.tsx";

const TAB_NAMES = ['Account', 'Profile', 'Safety & Privacy', 'Notifications', 'Preferences'];

/**
 * renders the user settings page. Each tab panel contains a 
 * specific settings component that is rendered when its 
 * corresponding tab is active.
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