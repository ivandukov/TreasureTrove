import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Icon, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
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

        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {selectedTheme ? selectedTheme : 'Theme'}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => { handleThemeChange("light"); }}>
                        <Icon as={SunIcon} mr={1}/> Light
                    </MenuItem>
                    <MenuItem onClick={() => { handleThemeChange("dark"); }}>
                        <Icon as={MoonIcon} mr={1}/> Dark
                    </MenuItem>
                    <MenuItem onClick={() => { handleThemeChange("system"); }}>
                        <Icon as={FiMonitor} mr={1}/> System
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}