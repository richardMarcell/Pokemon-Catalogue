import {
    Box,
    Card,
    Heading,
    Image,
    Progress,
    Stack,
    Text,
    Flex,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
    Tag,
    TagLabel,
    Select as ChakraSelect,
    Button,
} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

interface FilterByName {
    handleSearchPokemonNameChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FilterByName: React.FC<FilterByName> = ({
    handleSearchPokemonNameChange,
}) => {
    return (
        <div>
            <Box width="100%">
                <FormControl mt="4">
                    <FormLabel ml="70px">Search By Name</FormLabel>
                    <Input
                        type="search"
                        ml="70px"
                        placeholder="search pokemon"
                        bgColor="InfoBackground"
                        py="2"
                        onChange={handleSearchPokemonNameChange}
                        width="100%"
                    />
                </FormControl>
            </Box>
        </div>
    );
};

export default FilterByName;
