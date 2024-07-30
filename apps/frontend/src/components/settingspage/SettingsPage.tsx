import {
    Box,
    Heading,
    Stack,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import AccountSettings from "./AccountSettings";
import { NotificationSettings } from "./NotificationSettings";
import { PreferencesSettings } from "./PreferencesSettings";
import { ProfileSettings } from "./ProfileSettings";
import { SafetyPrivacySettings } from "./SafetyPrivacySettings";


const TAB_NAMES = [
    "Account",
    "Profile",
    "Safety & Privacy",
    "Notifications",
    "Preferences",
];

/**
 * renders the user settings page. Each tab panel contains a
 * specific settings component that is rendered when its
 * corresponding tab is active.
 * @returns JSX element
 */
export default function UserSettingsPage() {
    return (
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
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Box>
    );
}
