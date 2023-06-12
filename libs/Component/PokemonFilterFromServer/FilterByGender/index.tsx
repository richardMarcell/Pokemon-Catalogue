import { Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Select, { MultiValue } from "react-select";
import { useRouter } from "next/router";

const FilterPokemonByGenderFromServer = () => {
    const router = useRouter();
    const [selectedPokemonGender, setSelectedPokemonGender] = useState<
        string[]
    >([]);

    const genderOption = {
        gender: [
            {
                value: "Mayoritas Male",
                label: "Mayoritas Male",
                isDisabled: selectedPokemonGender.includes("Minoritas Female"),
            },
            {
                value: "Minoritas Male",
                label: "Minoritas Male",
                isDisabled: selectedPokemonGender.includes("Mayoritas Female"),
            },
            {
                value: "Balance",
                label: "Balance",
                isDisabled: false,
            },
            {
                value: "Mayoritas Female",
                label: "Mayoritas Female",
                isDisabled: selectedPokemonGender.includes("Minoritas Male"),
            },
            {
                value: "Minoritas Female",
                label: "Minoritas Female",
                isDisabled: selectedPokemonGender.includes("Mayoritas Male"),
            },
        ],
    };

    const customWidth = {
        control: (provided: any) => ({
            ...provided,
            width: "510px", // Atur lebar sesuai kebutuhan
        }),
    };

    const handleGenderFilterChange = (
        genderOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedPokemonGender(
            genderOptions.map(
                (gender: { value: string; label: string }) => gender.value
            )
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const genderQuery = selectedPokemonGender
            .map((gender) => `pokemonGender=${gender}`)
            .join(`&`);
        const url = genderQuery;

        router.push("?" + url);
    };

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormControl ml="80px" mt="20px">
                    <FormLabel>Filter By Gender</FormLabel>
                    <Flex>
                        <Select
                            isMulti
                            options={genderOption.gender}
                            styles={customWidth}
                            onChange={handleGenderFilterChange}
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

export default FilterPokemonByGenderFromServer;
