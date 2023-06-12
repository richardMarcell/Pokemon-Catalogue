import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { PokemonProps } from "../../libs/interface/pokemon";
import Pagination from "../../libs/Component/Pagination";
import PokemonListServer from "../../libs/Component/PokemonListServer";

const prisma = new PrismaClient();
const pokemonRecordPerPage: number = 3;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const currentPage: number = parseInt(query.page as string) || 1;
    const totalPokemons: number = await prisma.pokemon.count();
    const totalPages: number = Math.ceil(totalPokemons / pokemonRecordPerPage);

    // Memastikan currentPage tidak melebihi total halaman yang tersedia
    const page: number = Math.min(Math.max(1, currentPage), totalPages);

    const paginationStart: number = (page - 1) * pokemonRecordPerPage;

    // Mengambil nama pokemon di url
    const pokemonNameSearched = (query.pokemonName as string) || "";

    // Mengambil tipe pokemon di url
    const pokemonTypeSearched = (query.pokemonType as string) || "";

    // Mengambil classification pokemon di url
    const pokemonClassificationSearched =
        (query.pokemonClassification as string) || "";

    let pokemons;

    if (query.pokemonName) {
        pokemons = await prisma.pokemon.findMany({
            include: {
                abilities: {
                    select: {
                        id: true,
                        name: true,
                        pokemon_id: true,
                    },
                },
            },
            where: {
                name: {
                    contains: pokemonNameSearched,
                },
            },
        });
    } else if (query.pokemonType) {
        pokemons = await prisma.pokemon.findMany({
            include: {
                abilities: {
                    select: {
                        id: true,
                        name: true,
                        pokemon_id: true,
                    },
                },
            },
            where: {
                OR: [
                    {
                        type1: {
                            in: pokemonTypeSearched,
                        },
                    },
                    {
                        type2: {
                            in: pokemonTypeSearched,
                        },
                    },
                ],
            },
        });
    } else if (query.pokemonClassification) {
        pokemons = await prisma.pokemon.findMany({
            include: {
                abilities: {
                    select: {
                        id: true,
                        name: true,
                        pokemon_id: true,
                    },
                },
            },
            where: {
                classification: {
                    in: pokemonClassificationSearched,
                },
            },
        });
    } else if (query.pokemonGender) {
        pokemons = await prisma.pokemon.findMany({
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
    } else {
        pokemons = await prisma.pokemon.findMany({
            skip: paginationStart,
            take: pokemonRecordPerPage,
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
    }

    return {
        props: {
            pokemons: JSON.parse(JSON.stringify(pokemons)),
            currentPage: page,
            totalPages,
        },
    };
};

const PokemonServer = ({
    pokemons,
    currentPage,
    totalPages,
}: PokemonProps & { currentPage: number; totalPages: number }) => {
    const router = useRouter();

    const handlePrevious = () => {
        const prevPage = currentPage - 1;
        router.push(`?page=${prevPage}`);
    };

    const handleNext = () => {
        const nextPage = currentPage + 1;
        router.push(`?page=${nextPage}`);
    };

    const handlePageClick = (pageNumber: number) => {
        router.push(`?page=${pageNumber}`);
    };

    const renderPageNumber = () => {
        const pageNumbers: number[] = [];
        let startPage = currentPage - 2;
        let endPage = currentPage + 1;

        if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(4, totalPages);
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, totalPages - 3);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map((pageNumber) => (
            <Button
                key={pageNumber}
                colorScheme={currentPage === pageNumber ? "blue" : "gray"}
                onClick={() => handlePageClick(pageNumber)}
                mx="1"
            >
                {pageNumber}
            </Button>
        ));
    };

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
            <PokemonListServer pokemons={pokemons} />
            <Pagination
                currentPage={currentPage}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                renderPageNumber={renderPageNumber}
                totalPages={totalPages}
            />
        </div>
    );
};

export default PokemonServer;
