import {
    Box,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select as ChakraSelect,
    Button,
} from "@chakra-ui/react";
import { PokemonHeightFilter } from "../../../interface/pokemon";

interface FilterByHeight {
    pokemonHeightFilters: PokemonHeightFilter[];
    handlePokemonHeightFilterChange: (
        index: number,
        field: string,
        value: number | string
    ) => void;
    addPokemonHeightFilter: () => void;
}

const FilterByHeight: React.FC<FilterByHeight> = ({
    pokemonHeightFilters,
    handlePokemonHeightFilterChange,
    addPokemonHeightFilter,
}) => {
    return (
        <div>
            <Box width="100%">
                <FormControl>
                    <FormLabel>Filter By Height</FormLabel>
                    {pokemonHeightFilters.map((pokemonHeightFilter, index) => (
                        <Flex key={index} mt="10px" alignItems="center">
                            <ChakraSelect
                                width="25%"
                                mr="5px"
                                value={pokemonHeightFilter.operator}
                                placeholder="operator"
                                onChange={(e) =>
                                    handlePokemonHeightFilterChange(
                                        index,
                                        "operator",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="="> = </option>
                                <option value="<">&#60;</option>
                                <option value=">">&#62;</option>
                                <option value=">=">&ge;</option>
                                <option value="<=">&le;</option>
                            </ChakraSelect>
                            <Input
                                width="50%"
                                type="number"
                                placeholder="Add Pokemon Height"
                                value={
                                    pokemonHeightFilter.valueOfPokemonHeight ==
                                    0
                                        ? ""
                                        : pokemonHeightFilter.valueOfPokemonHeight
                                }
                                onChange={(e) =>
                                    handlePokemonHeightFilterChange(
                                        index,
                                        "valueOfPokemonHeight",
                                        Number(e.target.value)
                                    )
                                }
                            />
                            <Text ml="5px" mr="5px">
                                m
                            </Text>
                            <Button ml="5px" onClick={addPokemonHeightFilter}>
                                +
                            </Button>
                        </Flex>
                    ))}
                </FormControl>
            </Box>
        </div>
    );
};

export default FilterByHeight;
