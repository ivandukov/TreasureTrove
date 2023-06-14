import React, { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const DropdownButton = () => {
   const [selectedCategory, setSelectedCategory] = useState('All Categories');

   const handleCategorySelect = (category: React.SetStateAction<string>) => {
      setSelectedCategory(category);
   };

   return (
      <Menu>

         <MenuButton as={Button} colorScheme="blue" minWidth="200px" rightIcon={<Icon as={ChevronDownIcon}/>} paddingRight={2}>
            {selectedCategory}
         </MenuButton>

         <MenuList minWidth="200px" maxHeight="200px" overflowY="scroll">
            <MenuItem onClick={() => handleCategorySelect('All Categories')}>All Categories</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Car & Motorcycle')}>Car & Motorcycle</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Books')}>Books</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Coins')}>Coins</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Clothes & Accessoires')}>Clothes & Accessoires</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Groceries')}>Groceries</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Furniture')}>Furniture</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Video Games')}>Video Games</MenuItem>
         </MenuList>
      </Menu>
   );
};

export default DropdownButton;