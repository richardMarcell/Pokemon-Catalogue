import { Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Select, { MultiValue } from "react-select";
import { useRouter } from "next/router";

const FilterPokemonByClassificationFromServer = () => {
    const router = useRouter();

    const classificationOption = {
        classification: [
            { value: "Seed Pokémon", label: "Seed Pokémon" },
            { value: "Lizard Pokémon", label: "Lizard Pokémon" },
            { value: "Flame Pokémon", label: "Flame Pokémon" },
            { value: "Tiny Turtle Pokémon", label: "Tiny Turtle Pokémon" },
            { value: "Turle Pokémon", label: "Turle Pokémon" },
            { value: "Worm Pokémon", label: "Worm Pokémon" },
            { value: "Shellfish Pokémon", label: "Shellfish Pokémon" },
            { value: "Cocoon Pokémon", label: "Cocoon Pokémon" },
            { value: "Butterfly Pokémon", label: "Butterfly Pokémon" },
            { value: "Hairy Pokémon", label: "Hairy Pokémon" },
            { value: "Poison Pokémon", label: "Poison Pokémon" },
            { value: "Tiny Bird Pokémon", label: "Tiny Bird Pokémon" },
            { value: "Bird Pokémon", label: "Bird Pokémon" },
            { value: "Mouse Pokémon", label: "Mouse Pokémon" },
            { value: "Beak Pokémon", label: "Beak Pokémon" },
            { value: "Snake Pokémon", label: "Snake Pokémon" },
            { value: "Cobra Pokémon", label: "Cobra Pokémon" },
            { value: "Poison Pin Pokémon", label: "Poison Pin Pokémon" },
            { value: "Drill Pokémon", label: "Drill Pokémon" },
            { value: "Fairy Pokémon", label: "Fairy Pokémon" },
            { value: "Fox Pokémon", label: "Fox Pokémon" },
            { value: "Balloon Pokémon", label: "Balloon Pokémon" },
            { value: "Bat Pokémon", label: "Bat Pokémon" },
            { value: "Weed Pokémon", label: "Weed Pokémon" },
            { value: "Flower Pokémon", label: "Flower Pokémon" },
            { value: "Duck Pokémon", label: "Duck Pokémon" },
        ],
    };

    const customWidth = {
        control: (provided: any) => ({
            ...provided,
            width: "510px", // Atur lebar sesuai kebutuhan
        }),
    };

    const [selectedPokemonClassification, setSelectedPokemonClassification] =
        useState<string[]>([]);

    const handleClassificationFilterChange = (
        classificationOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedPokemonClassification(
            classificationOptions.map(
                (classification: { value: string; label: string }) =>
                    classification.value
            )
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const classificationQuery = selectedPokemonClassification
            .map((classification) => `pokemonClassification=${classification}`)
            .join(`&`);
        const url = classificationQuery;

        router.push("?" + url);
    };

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormControl mt="20px">
                    <FormLabel>Filter By Classification</FormLabel>
                    <Flex>
                        <Select
                            isMulti
                            options={classificationOption.classification}
                            styles={customWidth}
                            onChange={handleClassificationFilterChange}
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

export default FilterPokemonByClassificationFromServer;
