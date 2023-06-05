import { Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { PokemonProps } from "../../libs/interface/pokemon";
import PokemonList from "../../libs/Component/PokemonList";

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const pokemons = await prisma.pokemon.findMany({
        select: {
            id: true,
            against_bug: true,
            against_dark: true,
            against_dragon: true,
            against_electric: true,
            against_fairy: true,
            against_fight: true,
            against_fire: true,
            against_flying: true,
            against_ghost: true,
            against_grass: true,
            against_ground: true,
            against_ice: true,
            against_normal: true,
            against_poison: true,
            against_psychic: true,
            against_rock: true,
            against_steel: true,
            against_water: true,
            attack: true,
            base_egg_steps: true,
            base_happiness: true,
            base_total: true,
            capture_rate: true,
            classification: true,
            defense: true,
            experience_growth: true,
            height_m: true,
            hp: true,
            japanese_name: true,
            name: true,
            percentage_male: true,
            pokedex_number: true,
            sp_attack: true,
            sp_defense: true,
            speed: true,
            type1: true,
            type2: true,
            weight_kg: true,
            generation: true,
            is_legendary: true,
        },
    });

    return {
        props: {
            pokemons: JSON.parse(JSON.stringify(pokemons)),
        },
    };
};

const Pokemon = ({ pokemons }: PokemonProps) => {
    return (
        <div>
            <Heading
                textAlign="center"
                fontWeight="bold"
                mt="5"
                borderBottom="1px"
                pb="5"
                fontSize={{ lg: "4xl", md: "4xl", sm: "4xl", base: "3xl" }}
            >
                Catalogo de Pokémon
            </Heading>
            <PokemonList pokemons={pokemons} />
        </div>
    );
};

export default Pokemon;
