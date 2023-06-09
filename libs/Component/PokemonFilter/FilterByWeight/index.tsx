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
import { PokemonWeightFilter } from "../../../interface/pokemon";

interface FilterByWeight {
    pokemonWeightFilters: PokemonWeightFilter[];
    handlePokemonWeightFilterChange: (
        index: number,
        field: string,
        value: number | string
    ) => void;
    addPokemonWeightFilter: () => void;
}

const FilterByWeight: React.FC<FilterByWeight> = ({pokemonWeightFilters, handlePokemonWeightFilterChange, addPokemonWeightFilter}) => {
    return (
        <div>
            <Box width="100%">
                <FormLabel>Filter By Weight</FormLabel>
                <FormControl>
                    {pokemonWeightFilters.map((pokemonWeightFilter, index) => (
                        <Flex key={index} alignItems="center" mt="10px">
                            <ChakraSelect
                                width="25%"
                                value={pokemonWeightFilter.operator}
                                mr="5px"
                                placeholder="operator"
                                onChange={(e) =>
                                    handlePokemonWeightFilterChange(
                                        index,
                                        "operator",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="=">=</option>
                                <option value="<">&#60;</option>
                                <option value=">">&#62;</option>
                                <option value=">=">&ge;</option>
                                <option value="<=">&le;</option>
                            </ChakraSelect>
                            <Input
                                width="50%"
                                type="number"
                                placeholder="Add Pokemon Weight"
                                value={
                                    pokemonWeightFilter.valueOfPokemonWeight ==
                                    0
                                        ? ""
                                        : pokemonWeightFilter.valueOfPokemonWeight
                                }
                                onChange={(e) =>
                                    handlePokemonWeightFilterChange(
                                        index,
                                        "valueOfPokemonWeight",
                                        Number(e.target.value)
                                    )
                                }
                            />
                            <Text ml="5px" mr="5px">
                                Kg
                            </Text>

                            <Button ml="5px" onClick={addPokemonWeightFilter}>
                                +
                            </Button>
                        </Flex>
                    ))}
                </FormControl>
            </Box>
        </div>
    );
};

export default FilterByWeight;
