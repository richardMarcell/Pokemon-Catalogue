import React, { useState } from "react";
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
    Textarea,
    Button,
} from "@chakra-ui/react";
import { Pokemon } from "../../interface/pokemon";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react";
import { color } from "framer-motion";

interface PokemonProps {
    pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: PokemonProps) => {
    const [searchTerm, setSearchTerm] = useState("");
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

    const [genders, setGenders] = useState<string[]>([
        "Mayoritas Male",
        "Minoritas Male",
        "Balance",
        "Mayoritas Famale",
        "Minoritas Famale",
    ]);

    const [classifications, setClassifications] = useState<string[]>([
        "Seed Pokémon",
        "Lizard Pokémon",
        "Flame Pokémon",
        "Tiny Turtle Pokémon",
        "Turtle Pokémon",
        "Shellfish Pokémon",
        "Worm Pokémon",
        "Cocoon Pokémon",
        "Butterfly Pokémon",
        "Hairy Pokémon",
        "Poison Bee Pokémon",
        "Tiny Bird Pokémon",
        "Bird Pokémon",
        "Mouse Pokémon",
        "Beak Pokémon",
        "Snake Pokémon",
        "Cobra Pokémon",
        "Poison Pin Pokémon",
        "Drill Pokémon",
        "Fairy Pokémon",
        "Fox Pokémon",
        "Balloon Pokémon",
        "Bat Pokémon",
        "Weed Pokémon",
        "Flower Pokémon",
    ]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Box width="">
                <Flex wrap="wrap">
                    <FormControl mb="4" mt="4">
                        <FormLabel ml="80px">Search By Name</FormLabel>
                        <Input
                            type="search"
                            width="600px"
                            ml="80px"
                            placeholder="search pokemon"
                            bgColor="InfoBackground"
                            py="2"
                            onChange={handleSearchChange}
                        />
                    </FormControl>

                    <FormControl mb="4" mt="4">
                        <FormLabel ml="80px">Filter By Gender</FormLabel>
                        <Box
                            width="600px"
                            ml="80px"
                            mt="20px"
                            mb="50px"
                            height="55px"
                            p="10px"
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                wrap="wrap"
                            >
                                {genders.map((gender) => (
                                    <Tag
                                        size="lg"
                                        borderRadius="full"
                                        variant="solid"
                                        colorScheme="green"
                                        mx="5px"
                                        my="5px"
                                        cursor="pointer"
                                    >
                                        <TagLabel>{gender}</TagLabel>
                                    </Tag>
                                ))}
                            </Flex>
                        </Box>
                        <Box
                            width="600px"
                            ml="80px"
                            mt="30px"
                            mb="40px"
                            height="100px"
                            p="10px"
                            border="1px"
                            borderRadius="20px"
                        ></Box>
                    </FormControl>

                    <FormControl mb="4" mt="4">
                        <FormLabel ml="80px">
                            Filter By Classification
                        </FormLabel>
                        <Box
                            width="600px"
                            ml="80px"
                            mt="20px"
                            mb="300px"
                            height="55px"
                            p="10px"
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                wrap="wrap"
                            >
                                {classifications.map((classification) => (
                                    <Tag
                                        size="lg"
                                        borderRadius="full"
                                        variant="solid"
                                        colorScheme="blue"
                                        mx="5px"
                                        my="5px"
                                        cursor="pointer"
                                    >
                                        <TagLabel>{classification}</TagLabel>
                                    </Tag>
                                ))}
                            </Flex>
                        </Box>
                        <Box
                            width="600px"
                            ml="80px"
                            mt="30px"
                            mb="40px"
                            height="100px"
                            p="10px"
                            border="1px"
                            borderRadius="20px"
                        ></Box>
                    </FormControl>
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
                                <Image
                                    mx="auto"
                                    maxW={{ base: "100%", sm: "200px" }}
                                    boxSize="300px"
                                    objectFit="contain"
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                />
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
                                <Image
                                    mx="auto"
                                    maxW={{ base: "100%", sm: "200px" }}
                                    boxSize="300px"
                                    objectFit="contain"
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                />
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
