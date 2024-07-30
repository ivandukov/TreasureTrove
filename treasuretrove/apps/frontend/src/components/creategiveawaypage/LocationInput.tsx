import {
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import NewFilterModal from "../homepage/search/NewFilterModal";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface LocationSearchBarProps {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
    register: UseFormRegister<FieldValues>;
}

export function LocationInput({
    onOpen,
    isOpen,
    onClose,
    register,
}: LocationSearchBarProps) {
    return (
        <InputGroup>
            <Input placeholder="City/Postal Code" {...register("location")} />
            <InputRightElement>
                <IconButton
                    icon={<FaLocationDot />}
                    onClick={onOpen}
                    aria-label="Location"
                />
            </InputRightElement>
            <NewFilterModal isOpen={isOpen} onClose={onClose} />
        </InputGroup>
    );
}