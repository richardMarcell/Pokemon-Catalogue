import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const FilterByNameFromServer = () => {
    const router = useRouter();

    const [pokemonName, setPokemonName] = useState<string>("");

    const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`?pokemonName=${pokemonName}`);
    };

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormControl ml="80px" mt="20px">
                    <FormLabel>Filter By Name</FormLabel>
                    <Flex>
                        <Input
                            type="search"
                            placeholder="search by pokemon name"
                            width="lg"
                            mr="10px"
                            name="pokemonName"
                            value={pokemonName}
                            onChange={handleSearchByName}
                        />
                        <Button width="100px" type="submit" colorScheme="blue">
                            Search
                        </Button>
                    </Flex>
                </FormControl>
            </form>
        </div>
    );
};

export default FilterByNameFromServer;
