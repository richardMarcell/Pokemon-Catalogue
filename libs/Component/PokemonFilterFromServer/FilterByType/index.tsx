import { Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Select, { MultiValue } from "react-select";
import { useRouter } from "next/router";

const FilterPokemonByTypeFromServer = () => {
    const router = useRouter();

    const typeOption = {
        type: [
            { value: "grass", label: "grass" },
            { value: "fire", label: "fire" },
            { value: "water", label: "water" },
            { value: "bug", label: "bug" },
            { value: "normal", label: "normal" },
            { value: "poison", label: "poison" },
            { value: "electric", label: "electric" },
            { value: "ground", label: "ground" },
            { value: "fairy", label: "fairy" },
            { value: "fighting", label: "fighting" },
            { value: "psychic", label: "psychic" },
            { value: "rock", label: "rock" },
            { value: "ghost", label: "ghost" },
            { value: "ice", label: "ice" },
            { value: "dragon", label: "dragon" },
            { value: "dark", label: "dark" },
            { value: "steel", label: "steel" },
            { value: "flying", label: "flying" },
        ],
    };

    const customWidth = {
        control: (provided: any) => ({
            ...provided,
            width: "510px", // Atur lebar sesuai kebutuhan
        }),
    };

    const [selectedPokemonType, setSelectedPokemonType] = useState<string[]>(
        []
    );

    const handleTypeFilterChange = (
        typeOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedPokemonType(
            typeOptions.map(
                (type: { value: string; label: string }) => type.value
            )
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const typeQuery = selectedPokemonType
            .map((type) => `pokemonType=${type}`)
            .join(`&`);
        const url = typeQuery;

        router.push("?" + url);
    };

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormControl mr="" mt="20px">
                    <FormLabel>Filter By Type</FormLabel>
                    <Flex>
                        <Select
                            isMulti
                            options={typeOption.type}
                            styles={customWidth}
                            onChange={handleTypeFilterChange}
                        />
                        <Button
                            width="100px"
                            ml="10px"
                            type="submit"
                            colorScheme="blue"
                        >
                            Filter
                        </Button>
                    </Flex>
                </FormControl>
            </form>
        </div>
    );
};

export default FilterPokemonByTypeFromServer;
