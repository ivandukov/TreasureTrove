import { CheckIcon, ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Icon, Menu, MenuButton, MenuItem, MenuList, Stack, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMonitor } from "react-icons/fi";

/**
 * renders a component similar to Chakra UI's Select, which 
 * allows switching between light and dark mode  
 * @returns JSX element
 */
export default function ThemeSwitcher() {

    const { colorMode, setColorMode } = useColorMode();
    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleThemeChange = (theme: any) => {
        setColorMode(theme);
        setSelectedTheme(theme);
    };

    return (

        <Stack w="17%">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {selectedTheme ? selectedTheme : 'Theme'}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => { handleThemeChange("light"); }}>
                        <Icon as={SunIcon} mr={1} /> Light
                        {selectedTheme === "light" && <CheckIcon ml="auto" />}
                    </MenuItem>
                    <MenuItem onClick={() => { handleThemeChange("dark"); }}>
                        <Icon as={MoonIcon} mr={1} /> Dark
                        {selectedTheme === "dark" && <CheckIcon ml="auto" />}
                    </MenuItem>
                    <MenuItem onClick={() => { handleThemeChange("system"); }}>
                        <Icon as={FiMonitor} mr={1} /> System
                        {selectedTheme === "system" && <CheckIcon ml="auto" />}
                    </MenuItem>
                </MenuList>
            </Menu>
        </Stack>
    );
}