import {
    CheckIcon,
    ChevronDownIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import {
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorMode,
} from "@chakra-ui/react";

import { useState } from "react";
import { FiMonitor } from "react-icons/fi";

type Theme = "light" | "dark" | "system";

/**
 * renders a component similar to Chakra UI's Select, which
 * allows switching between light and dark mode
 * @returns JSX element
 */
export default function ThemeSwitcher() {
    const { setColorMode } = useColorMode();
    const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

    const handleThemeChange = (theme: Theme) => {
        setColorMode(theme);
        setSelectedTheme(theme);
    };

    return (
        <Stack w="30%">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {selectedTheme ? selectedTheme : "Theme"}
                </MenuButton>
                <MenuList>
                    <MenuItem
                        onClick={() => {
                            handleThemeChange("light");
                        }}
                    >
                        <Icon as={SunIcon} mr={3} /> Light
                        {selectedTheme === "light" && <CheckIcon ml="auto" />}
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleThemeChange("dark");
                        }}
                    >
                        <Icon as={MoonIcon} mr={3} /> Dark
                        {selectedTheme === "dark" && <CheckIcon ml="auto" />}
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleThemeChange("system");
                        }}
                    >
                        <Icon as={FiMonitor} mr={3} /> System
                        {selectedTheme === "system" && <CheckIcon ml="auto" />}
                    </MenuItem>
                </MenuList>
            </Menu>
        </Stack>
    );
}
