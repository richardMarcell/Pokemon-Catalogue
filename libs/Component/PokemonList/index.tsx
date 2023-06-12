import React, { useState, ChangeEvent, useEffect } from "react";
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
import {
    Pokemon,
    PokemonHeightFilter,
    PokemonProps,
    PokemonWeightFilter,
} from "../../interface/pokemon";
import Select, { MultiValue } from "react-select";
import FilterByName from "../PokemonFilter/FilterByName";
import FilterByHeight from "../PokemonFilter/FilterByHeight";
import FilterByWeight from "../PokemonFilter/FilterByWeight";
import { motion } from "framer-motion";

type SelectedOption = {
    value: string;
    label: string;
};

const MotionBox = motion(Box);

const PokemonList = ({ pokemons }: PokemonProps): JSX.Element => {
    // component modal chakra ui
    const { isOpen, onOpen, onClose } = useDisclosure();

    // state untuk menyimpan karakter pencarian pokemon
    const [pokemonNameSearched, setPokemonNameSearched] = useState("");

    // state untuk menyimpan detail pokemon
    const [pokemon, setPokemon] = useState<Pokemon>({
        id: 0,
        against_bug: 0,
        against_dark: 0,
        against_dragon: 0,
        against_electric: 0,
        against_fairy: 0,
        against_fight: 0,
        against_fire: 0,
        against_flying: 0,
        against_ghost: 0,
        against_grass: 0,
        against_ground: 0,
        against_ice: 0,
        against_normal: 0,
        against_poison: 0,
        against_psychic: 0,
        against_rock: 0,
        against_steel: 0,
        against_water: 0,
        attack: 0,
        base_egg_steps: 0,
        base_happiness: 0,
        base_total: 0,
        capture_rate: 0,
        classification: "",
        defense: 0,
        experience_growth: 0,
        height_m: 0,
        hp: 0,
        japanese_name: "",
        name: "",
        percentage_male: 0,
        pokedex_number: 0,
        sp_attack: 0,
        sp_defense: 0,
        speed: 0,
        type1: "",
        type2: "",
        weight_kg: 0,
        generation: 0,
        is_legendary: false,
        image: "",
        abilities: [],
    });

    // state untuk menyimpan pilihan chip user
    const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
    const [selectedClassifications, setSelectedClassifications] = useState<
        string[]
    >([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const filterOptionsMultiSelect = {
        genders: [
            {
                value: "Mayoritas Male",
                label: "Mayoritas Male",
                isDisabled: selectedGenders.includes("Minoritas Female"),
            },
            {
                value: "Minoritas Male",
                label: "Minoritas Male",
                isDisabled: selectedGenders.includes("Mayoritas Female"),
            },
            {
                value: "Balance",
                label: "Balance",
                isDisabled: false,
            },
            {
                value: "Mayoritas Female",
                label: "Mayoritas Female",
                isDisabled: selectedGenders.includes("Minoritas Male"),
            },
            {
                value: "Minoritas Female",
                label: "Minoritas Female",
                isDisabled: selectedGenders.includes("Mayoritas Male"),
            },
        ],
        classifications: [
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

    // function untuk menghandle pencarian dengan plain text
    const handleSearchPokemonNameChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setPokemonNameSearched(event.target.value);
    };

    // function untuk menghandle perubahan pada filter gender
    const handleGenderFilterChange = (
        genderOptions: MultiValue<{ value: string; label: string }>
    ) => {
        const selectedGenderOptions = genderOptions.map(
            (gender) => gender.value
        );
        setSelectedGenders(selectedGenderOptions);
    };

    // function untuk menghandle perubahan pada filter classification
    const handleClassificationFilterChange = (
        classificationOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedClassifications(
            classificationOptions.map(
                (classification: { value: string; label: string }) =>
                    classification.value
            )
        );
    };

    // function untuk menghandle perubahan pada filter type
    const handleTypeFilterChange = (
        typeOptions: MultiValue<{ value: string; label: string }>
    ) => {
        setSelectedTypes(
            typeOptions.map(
                (type: { value: string; label: string }) => type.value
            )
        );
    };

    // state untuk menyimpan component input filter Height Pokemon
    const [pokemonHeightFilters, setPokemonHeightFilters] = useState<
        PokemonHeightFilter[]
    >([
        {
            operator: "",
            valueOfPokemonHeight: 0,
        },
    ]);

    // state untuk menyimpan compoenent input filter Weight Pokemon
    const [pokemonWeightFilters, setPokemonWeightFilters] = useState<
        PokemonWeightFilter[]
    >([
        {
            operator: "",
            valueOfPokemonWeight: 0,
        },
    ]);

    // function untuk menambah inputan filter dengan height pokemon
    const addPokemonHeightFilter = () => {
        setPokemonHeightFilters([
            ...pokemonHeightFilters,
            { operator: "", valueOfPokemonHeight: 0 },
        ]);
    };

    const addPokemonWeightFilter = () => {
        setPokemonWeightFilters([
            ...pokemonWeightFilters,
            { operator: "", valueOfPokemonWeight: 0 },
        ]);
    };

    // function untuk menghandle perubahan pada filter height pokemon
    const handlePokemonHeightFilterChange = (
        index: number,
        field: string,
        value: number | string
    ) => {
        const heightFilterUpdated: any[] = [...pokemonHeightFilters];
        heightFilterUpdated[index][field] = value;
        setPokemonHeightFilters(heightFilterUpdated);
    };

    // function untuk menghandle perubahan pada filter weight pokemon
    const handlePokemonWeightFilterChange = (
        index: number,
        field: string,
        value: number | string
    ) => {
        const weightFilterUpdated: any[] = [...pokemonWeightFilters];
        weightFilterUpdated[index][field] = value;
        setPokemonWeightFilters(weightFilterUpdated);
    };

    // variable untuk menyimpan hasil pokemon yang sudah di filter
    const filteredPokemons: Pokemon[] = pokemons.filter((pokemon) => {
        // Memfilter Nama Pokemon yang disearch
        const isPokemonNameMatch: boolean = pokemon.name
            .toLowerCase()
            .includes(pokemonNameSearched.toLowerCase());

        // Memfilter berdasarkan range percentage male
        const isPokemonGenderMatch: boolean | Pokemon =
            selectedGenders.length < 1
                ? pokemon
                : selectedGenders.includes(
                      "Mayoritas Male" || "Minoritas Female"
                  )
                ? pokemon.percentage_male > 50
                : selectedGenders.includes("Balance")
                ? pokemon.percentage_male == 50
                : pokemon.percentage_male < 50;

        // Memfilter berdasarkan classification pokemon
        const isPokemonClassificationMatch: boolean =
            selectedClassifications.length == 0 ||
            selectedClassifications.includes(pokemon.classification);

        // Memfilter berdasarkan type Pokemon
        const isPokemonTypeMatch: boolean =
            selectedTypes.length == 0 ||
            selectedTypes.includes(pokemon.type1) ||
            selectedTypes.includes(pokemon.type2);

        // Memfilter berdasarkan Pokemon Height
        let isPokemonHeightMatch: boolean = false;
        for (let i = 0; i < pokemonHeightFilters.length; i++) {
            const pokemonHeightFiltered = pokemonHeightFilters[i];
            if (pokemonHeightFiltered.operator === "<") {
                isPokemonHeightMatch =
                    pokemon.height_m <
                    pokemonHeightFiltered.valueOfPokemonHeight;
            } else if (pokemonHeightFiltered.operator === ">") {
                isPokemonHeightMatch =
                    pokemon.height_m >
                    pokemonHeightFiltered.valueOfPokemonHeight;
            } else if (pokemonHeightFiltered.operator === "=") {
                isPokemonHeightMatch =
                    pokemon.height_m ==
                    pokemonHeightFiltered.valueOfPokemonHeight;
            } else if (pokemonHeightFiltered.operator === ">=") {
                isPokemonHeightMatch =
                    pokemon.height_m >=
                    pokemonHeightFiltered.valueOfPokemonHeight;
            } else if (pokemonHeightFiltered.operator === "<=") {
                isPokemonHeightMatch =
                    pokemon.height_m <=
                    pokemonHeightFiltered.valueOfPokemonHeight;
            } else {
                isPokemonHeightMatch = true;
            }
        }

        // Memfilter berdasarkan Pokemon Weight
        let isPokemonWeightMatch: boolean = false;
        for (let i = 0; i < pokemonWeightFilters.length; i++) {
            const pokemonWeightFiltered = pokemonWeightFilters[i];
            if (pokemonWeightFiltered.operator === ">") {
                isPokemonWeightMatch =
                    pokemon.weight_kg >
                    pokemonWeightFiltered.valueOfPokemonWeight;
            } else if (pokemonWeightFiltered.operator === "<") {
                isPokemonWeightMatch =
                    pokemon.weight_kg <
                    pokemonWeightFiltered.valueOfPokemonWeight;
            } else if (pokemonWeightFiltered.operator === "=") {
                isPokemonWeightMatch =
                    pokemon.weight_kg ==
                    pokemonWeightFiltered.valueOfPokemonWeight;
            } else if (pokemonWeightFiltered.operator === ">=") {
                isPokemonWeightMatch =
                    pokemon.weight_kg >=
                    pokemonWeightFiltered.valueOfPokemonWeight;
            } else if (pokemonWeightFiltered.operator === "<=") {
                isPokemonWeightMatch =
                    pokemon.weight_kg <=
                    pokemonWeightFiltered.valueOfPokemonWeight;
            } else {
                isPokemonWeightMatch = true;
            }
        }

        return (
            isPokemonNameMatch &&
            isPokemonClassificationMatch &&
            isPokemonGenderMatch &&
            isPokemonTypeMatch &&
            isPokemonHeightMatch &&
            isPokemonWeightMatch
        );
    });

    return (
        <div>
            <Box width="100%">
                <Flex wrap="wrap">
                    <FilterByName
                        handleSearchPokemonNameChange={
                            handleSearchPokemonNameChange
                        }
                    />

                    <Box width="100%" mt="30px">
                        <Flex
                            justifyContent="space-between"
                            wrap="wrap"
                            px="70px"
                        >
                            <FilterByHeight
                                pokemonHeightFilters={pokemonHeightFilters}
                                handlePokemonHeightFilterChange={
                                    handlePokemonHeightFilterChange
                                }
                                addPokemonHeightFilter={addPokemonHeightFilter}
                            />
                            <FilterByWeight
                                pokemonWeightFilters={pokemonWeightFilters}
                                addPokemonWeightFilter={addPokemonWeightFilter}
                                handlePokemonWeightFilterChange={
                                    handlePokemonWeightFilterChange
                                }
                            />
                        </Flex>
                    </Box>

                    <Box mt="30px" mx="auto" width="90%">
                        <FormLabel>Filter By Gender</FormLabel>
                        <Select
                            options={filterOptionsMultiSelect.genders}
                            isMulti
                            onChange={handleGenderFilterChange}
                        />
                    </Box>

                    <Box mt="30px" mx="auto" width="90%">
                        <FormControl>
                            <FormLabel>Filter By Classification</FormLabel>
                            <Select
                                options={
                                    filterOptionsMultiSelect.classifications
                                }
                                isMulti
                                onChange={handleClassificationFilterChange}
                            />
                        </FormControl>
                    </Box>

                    <Box mt="30px" mx="auto" width="90%">
                        <FormControl>
                            <FormLabel>Filter By Type</FormLabel>
                            <Select
                                options={filterOptionsMultiSelect.type}
                                isMulti
                                onChange={handleTypeFilterChange}
                            />
                        </FormControl>
                    </Box>
                </Flex>
            </Box>

            <Box mt="10">
                <Flex wrap="wrap" alignItems="center" justifyContent="center">
                    {filteredPokemons.map((pokemon) => (
                        <Card
                            width="400px"
                            height="450px"
                            bgColor="white"
                            boxShadow="md"
                            m="4"
                            onClick={() => {
                                onOpen(), setPokemon(pokemon);
                            }}
                            key={pokemon.id}
                            cursor="pointer"
                        >
                            <Box>
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        mx="auto"
                                        maxW={{ base: "100%", sm: "200px" }}
                                        boxSize="300px"
                                        objectFit="contain"
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        loading="lazy"
                                    />
                                </MotionBox>
                            </Box>
                            <Text textAlign="center">
                                {pokemon.japanese_name}
                            </Text>
                            <Heading textAlign="center" mb="5">
                                {pokemon.name}
                            </Heading>
                            <Box width="100%">
                                <Flex justifyContent="center">
                                    <Tag mr="3" colorScheme="whatsapp">
                                        {pokemon.type1}
                                    </Tag>

                                    {pokemon.type2 == "" ? (
                                        ""
                                    ) : (
                                        <Tag colorScheme="facebook">
                                            {pokemon.type2}
                                        </Tag>
                                    )}
                                </Flex>
                            </Box>
                        </Card>
                    ))}
                </Flex>

                <Modal onClose={onClose} size="3xl" isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader
                            textAlign="center"
                            fontSize="2xl"
                            fontWeight="bold"
                        >
                            {pokemon.name} Detail
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <MotionBox
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        mx="auto"
                                        maxW={{ base: "100%", sm: "200px" }}
                                        boxSize="300px"
                                        objectFit="contain"
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        loading="lazy"
                                    />
                                </MotionBox>
                            </Box>
                            <Text textAlign="center" fontSize="2xl">
                                {pokemon.japanese_name}
                            </Text>
                            <Box width="100%" mt="2">
                                <Flex justifyContent="center">
                                    <Tag mr="3" colorScheme="whatsapp">
                                        {pokemon.type1}
                                    </Tag>

                                    {pokemon.type2 == "" ? (
                                        ""
                                    ) : (
                                        <Tag colorScheme="facebook">
                                            {pokemon.type2}
                                        </Tag>
                                    )}
                                </Flex>
                            </Box>

                            <Box width="100%" mt="20px">
                                <Text fontWeight="bold" textAlign="center">
                                    Skill
                                </Text>
                                <Flex justifyContent="center">
                                    {pokemon.abilities.map((ability) => (
                                        <Tag
                                            mt="10px"
                                            mr="3"
                                            key={ability.id}
                                            colorScheme="blue"
                                        >
                                            {ability.name}
                                        </Tag>
                                    ))}
                                </Flex>
                            </Box>

                            <Box mt="2">
                                <Flex
                                    justifyContent="start"
                                    alignItems="center"
                                    wrap="wrap"
                                >
                                    <Stack ml="5" width="100%">
                                        <Flex>
                                            <Text fontWeight="bold" mr="82px">
                                                Weight
                                            </Text>
                                            <Text>{pokemon.weight_kg} Kg</Text>
                                        </Flex>
                                    </Stack>
                                    <Stack ml="5" mt="2" width="100%">
                                        <Flex>
                                            <Text fontWeight="bold" mr="85px">
                                                Height
                                            </Text>
                                            <Text>{pokemon.height_m} m</Text>
                                        </Flex>
                                    </Stack>

                                    <Stack ml="5" mt="2" width="100%">
                                        <Flex>
                                            <Text fontWeight="bold" mr="40px">
                                                Classification
                                            </Text>
                                            <Text>
                                                {pokemon.classification}
                                            </Text>
                                        </Flex>
                                    </Stack>
                                </Flex>
                            </Box>

                            <Box mt="10">
                                <Flex justifyContent="center" wrap="wrap">
                                    <Stack width="700px">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text mr="9">Attack</Text>
                                            <Progress
                                                colorScheme="red"
                                                size="lg"
                                                value={pokemon.attack}
                                                width="80%"
                                                max={200}
                                            />
                                            <Text ml="4">{pokemon.attack}</Text>
                                        </Flex>
                                    </Stack>

                                    <Stack mt="2" width="700px">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text mr="6">Defense</Text>
                                            <Progress
                                                colorScheme="orange"
                                                size="lg"
                                                value={pokemon.defense}
                                                width="80%"
                                                max={200}
                                            />
                                            <Text ml="4">
                                                {pokemon.defense}
                                            </Text>
                                        </Flex>
                                    </Stack>

                                    <Stack mt="2" width="700px">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text mr="4">SP Attack</Text>
                                            <Progress
                                                colorScheme="blue"
                                                size="lg"
                                                value={pokemon.sp_attack}
                                                width="80%"
                                                max={200}
                                            />
                                            <Text ml="4">
                                                {pokemon.sp_attack}
                                            </Text>
                                        </Flex>
                                    </Stack>

                                    <Stack mt="2" width="700px">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text mr="1">SP Defense</Text>
                                            <Progress
                                                colorScheme="blue"
                                                size="lg"
                                                value={pokemon.sp_defense}
                                                width="80%"
                                                max={200}
                                            />
                                            <Text ml="4">
                                                {pokemon.sp_defense}
                                            </Text>
                                        </Flex>
                                    </Stack>
                                    <Stack mt="2" width="700px">
                                        <Flex
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Text mr="9">Speed</Text>
                                            <Progress
                                                colorScheme="blue"
                                                size="lg"
                                                value={pokemon.speed}
                                                width="80%"
                                                max={200}
                                            />
                                            <Text ml="4">{pokemon.speed}</Text>
                                        </Flex>
                                    </Stack>
                                </Flex>
                            </Box>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </div>
    );
};

export default PokemonList;
