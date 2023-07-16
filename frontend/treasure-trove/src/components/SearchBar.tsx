import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

/**
 * renders a Searchbar containing a text and a search button
 * @param width
 * @param ph default text displayed in the Search bar
 * @returns JSX element 
 */
export default function SearchBar({ width, ph } : {width:any, ph:string}) {

   return (
      <InputGroup w={width}>
         <Input placeholder={ph}/>
         <InputRightElement>
            <IconButton aria-label="Search" icon={<SearchIcon/>} colorScheme="gray"/>
         </InputRightElement>
      </InputGroup>
   );
}