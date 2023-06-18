import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select as ChakraSelect,
    Text,
} from "@chakra-ui/react";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import Select, { MultiValue } from "react-select";
import { useRouter } from "next/router";
import {
    PokemonHeightFilter,
    PokemonWeightFilter,
} from "../../interface/pokemon";

const PokemonFilterServer = () => {
    // variabel untuk menyimpan fungsi useRouter()
    const router = useRouter();

    const { query } = router;

    console.log(query);

    // state untuk mengambil nama pokemon
    const [pokemonName, setPokemonName] = useState<string>(
        (query.pokemonName as string) || ""
    );

    // state untuk mengambil gender pokemon
    const [selectedPokemonGender, setSelectedPokemonGender] = useState<
        string[]
    >((query.pokemonGender as string[]) || []);

    // state untuk mengambil class pokemon
    const [selectedPokemonClassification, setSelectedPokemonClassification] =
        useState<string[]>((query.pokemonClassification as string[]) || []);

    // state untuk mengambil type pokemon
    const [selectedPokemonType, setSelectedPokemonType] = useState<string[]>(
        (query.pokemonType as string[]) || []
    );

    // state untuk mengambil tinggi pokemon
    const [pokemonHeightFilters, setPokemonHeightFilters] = useState<
        PokemonHeightFilter[]
    >([
        {
            operator: (query.heightOperator as string) || "",
            valueOfPokemonHeight: Number(query.heightValue as string) || 0,
        },
    ]);

    // state untuk mengambil berat pokemon
    const [pokemonWeightFilters, setPokemonWeightFilters] = useState<
        PokemonWeightFilter[]
    >([
        {
            operator: (query.weightOperator as string) || "",
            valueOfPokemonWeight: Number(query.weightValue as string) || 0,
        },
    ]);

    // variabel untuk menyimpan option multiselect
    const multiSelectOption = {
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

    // variabel menyimpan custom width
    const customWidth = {
        control: (provided: any) => ({
            ...provided,
            width: "510px", // Atur lebar sesuai kebutuhan
        }),
    };

    // function untuk menghandle perubahan input nama pokemon
    const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value);
    };

    // function untuk menghandle perubahan input gender pokemon
    const handleGenderFilterChange = (
        genderOptions: MultiValue<{ value: string; label: string }>
    ) => {
        if (Array.isArray(selectedPokemonGender)) {
            setSelectedPokemonGender(
                genderOptions.map((gender) => gender.value)
            );
        }
    };

    // function untuk menghandle perubahan input class pokemon
    const handleClassificationFilterChange = (
        classificationOptions: MultiValue<{ value: string; label: string }>
    ) => {
        if (Array.isArray(selectedPokemonClassification)) {
            setSelectedPokemonClassification(
                classificationOptions.map(
                    (classification) => classification.value
                )
            );
        }
    };

    // function untuk menghandle perubahan input type pokemon
    const handleTypeFilterChange = (
        typeOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedPokemonType(typeOptions.map((type) => type.value));
    };

    // function untuk menambah input tinggi pokemon
    const addPokemonHeightFilter = () => {
        setPokemonHeightFilters([
            ...pokemonHeightFilters,
            { operator: "", valueOfPokemonHeight: 0 },
        ]);
    };

    // function untuk menghapus input tinggi pokemon
    const deletePokemonHeightFilter = (index: number) => {
        const heightFilters = [...pokemonHeightFilters];
        heightFilters.splice(index, 1);
        setPokemonHeightFilters(heightFilters);
    };

    // function untuk menghandle perubahan input tinggi pokemon
    const handlePokemonHeightFilterChange = (
        index: number,
        fieldOfHeight: string,
        valueOfHeight: number | string
    ) => {
        const heightFilterUpdated: any[] = [...pokemonHeightFilters];
        heightFilterUpdated[index][fieldOfHeight] = valueOfHeight;
        setPokemonHeightFilters(heightFilterUpdated);
    };

    // function untuk menambah input berat pokemon
    const addPokemonWeightFilter = () => {
        setPokemonWeightFilters([
            ...pokemonWeightFilters,
            { operator: "", valueOfPokemonWeight: 0 },
        ]);
    };

    // function untuk menghapus input berat pokemon
    const deletePokemonWeightFilter = (index: number) => {
        const weightFilters = [...pokemonWeightFilters];
        weightFilters.splice(index, 1);
        setPokemonWeightFilters(weightFilters);
    };

    // function untuk menghandle perubahan input berat pokemon
    const handlePokemonWeightFilterChange = (
        index: number,
        fieldOfWeight: string,
        valueOfWeight: number | string
    ) => {
        const weightFilterUpdated: any[] = [...pokemonWeightFilters];
        weightFilterUpdated[index][fieldOfWeight] = valueOfWeight;
        setPokemonWeightFilters(weightFilterUpdated);
    };

    // function untuk menghandle submit form filter
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const genderQuery = Array.isArray(selectedPokemonGender)
            ? selectedPokemonGender
                  .filter((gender) => gender !== "")
                  .map((gender) => `pokemonGender=${gender}`)
                  .join(`&`)
            : [];
        const urlGenderQuery = genderQuery;

        const typeQuery = Array.isArray(selectedPokemonType)
            ? selectedPokemonType
                  .filter((type) => type !== "")
                  .map((type) => `pokemonType=${type}`)
                  .join(`&`)
            : [];
        const urlTypeQuery = typeQuery;

        const classificationQuery = Array.isArray(selectedPokemonClassification)
            ? selectedPokemonClassification
                  .filter((classification) => classification !== "")
                  .map(
                      (classification) =>
                          `pokemonClassification=${classification}`
                  )
                  .join(`&`)
            : [];
        const urlClassificationQuery = classificationQuery;

        const heightQuery = pokemonHeightFilters
            .map(
                (heightFilter) =>
                    `heightOperator=${heightFilter.operator}&heightValue=${heightFilter.valueOfPokemonHeight}`
            )
            .join(`&`);
        const urlHeightQuery = heightQuery;

        const weightQuery = pokemonWeightFilters
            .map(
                (weightFilter) =>
                    `weightOperator=${weightFilter.operator}&weightValue=${weightFilter.valueOfPokemonWeight}`
            )
            .join(`&`);
        const urlWeightQuery = weightQuery;

        router.push(
            `?pokemonName=${pokemonName}&${urlGenderQuery}&${urlTypeQuery}&${urlClassificationQuery}&${urlHeightQuery}&${urlWeightQuery}`
        );
    };

    // ketika page di render ulang, maka akan menghapus semua query string yang ada di url
    useEffect(() => {
        router.replace(router.pathname);
        setPokemonName("");
        setSelectedPokemonGender([]);
        setSelectedPokemonType([]);
        setSelectedPokemonClassification([]);
        setPokemonHeightFilters([]);
        setPokemonWeightFilters([]);
    }, []);

    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <Flex ml="150px">
                    <FormControl mr="" mt="20px">
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
                        </Flex>
                    </FormControl>

                    <FormControl mt="20px">
                        <FormLabel>Filter By Gender</FormLabel>
                        <Flex>
                            <Select
                                isMulti
                                options={multiSelectOption.gender}
                                styles={customWidth}
                                value={
                                    Array.isArray(multiSelectOption.gender)
                                        ? multiSelectOption.gender.filter(
                                              (option) =>
                                                  selectedPokemonGender.includes(
                                                      option.value
                                                  )
                                          )
                                        : []
                                }
                                onChange={handleGenderFilterChange}
                            />
                        </Flex>
                    </FormControl>
                </Flex>

                <Flex ml="150px">
                    <FormControl mr="" mt="20px">
                        <FormLabel>Filter By Type</FormLabel>
                        <Flex>
                            <Select
                                isMulti
                                options={multiSelectOption.type}
                                styles={customWidth}
                                onChange={handleTypeFilterChange}
                                value={
                                    Array.isArray(multiSelectOption.type)
                                        ? multiSelectOption.type.filter(
                                              (option) =>
                                                  selectedPokemonType.includes(
                                                      option.value
                                                  )
                                          )
                                        : []
                                }
                            />
                        </Flex>
                    </FormControl>

                    <FormControl mt="20px">
                        <FormLabel>Filter By Classification</FormLabel>
                        <Flex>
                            <Select
                                isMulti
                                options={multiSelectOption.classification}
                                styles={customWidth}
                                onChange={handleClassificationFilterChange}
                                value={
                                    Array.isArray(
                                        multiSelectOption.classification
                                    )
                                        ? multiSelectOption.classification.filter(
                                              (option) =>
                                                  selectedPokemonClassification.includes(
                                                      option.value
                                                  )
                                          )
                                        : []
                                }
                            />
                        </Flex>
                    </FormControl>
                </Flex>

                <Flex ml="150px" mt="20px">
                    <FormControl>
                        <FormLabel>Filter By Height</FormLabel>
                        <Flex alignItems="center" wrap="wrap">
                            {pokemonHeightFilters.map(
                                (pokemonHeightFilter, index) => (
                                    <Flex
                                        key={index}
                                        mt="10px"
                                        alignItems="center"
                                    >
                                        <ChakraSelect
                                            width="100px"
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
                                            width="335px"
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
                                        {index < 0 ? (
                                            <></>
                                        ) : (
                                            <Button
                                                ml="5px"
                                                onClick={() =>
                                                    deletePokemonHeightFilter(
                                                        index
                                                    )
                                                }
                                            >
                                                -
                                            </Button>
                                        )}
                                    </Flex>
                                )
                            )}
                            <Button
                                ml="5px"
                                mt="10px"
                                onClick={addPokemonHeightFilter}
                            >
                                +
                            </Button>
                        </Flex>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Filter By Weight</FormLabel>
                        <Flex wrap="wrap" alignItems="center">
                            {pokemonWeightFilters.map(
                                (pokemonWeightFilter, index) => (
                                    <Flex
                                        key={index}
                                        alignItems="center"
                                        mt="10px"
                                    >
                                        <ChakraSelect
                                            width="100px"
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
                                            width="335px"
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
                                        {index < 0 ? (
                                            <></>
                                        ) : (
                                            <Button
                                                ml="5px"
                                                onClick={() =>
                                                    deletePokemonWeightFilter(
                                                        index
                                                    )
                                                }
                                            >
                                                -
                                            </Button>
                                        )}
                                    </Flex>
                                )
                            )}
                            <Button
                                ml="5px"
                                mt="10px"
                                onClick={addPokemonWeightFilter}
                            >
                                +
                            </Button>
                        </Flex>
                    </FormControl>
                </Flex>

                <Button
                    colorScheme="blue"
                    mt="20px"
                    width="200px"
                    ml="150px"
                    type="submit"
                >
                    Filter
                </Button>
            </form>
        </div>
    );
};

export default PokemonFilterServer;
