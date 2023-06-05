import { Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { PokemonProps } from "../../libs/interface/pokemon";
import PokemonList from "../../libs/Component/PokemonList";

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
    const pokemons = await prisma.pokemon.findMany({
        include: {
            abilities: {
                select: {
                    id: true,
                    name: true,
                    pokemon_id: true,
                },
            },
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
