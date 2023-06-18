import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { Button, Heading, filter } from "@chakra-ui/react";
import { useState } from "react";
import Pagination from "../../libs/Component/Pagination";
import PokemonListServer from "../../libs/Component/PokemonListServer";
import { PokemonProps } from "../../libs/interface/pokemon";

// variable menampung source di prisma
const prisma = new PrismaClient();

// variabel untuk menampung berapa record data yang akan ditampilkan untuk setiap page pagination
const pokemonRecordPerPage: number = 3;

// interface tipe data untuk query string di ur;
interface QueryParams {
    page?: string;
    pokemonName?: string;
    pokemonType?: string;
    pokemonClassification?: string;
    pokemonGender?: string;
    heightOperator?: string;
    weightOperator?: string;
    heightValue?: string | undefined;
    weightValue?: string | undefined;
}

// interface untuk variabel terkait dengan pagiantion
interface Props extends PokemonProps {
    currentPage: number;
    totalPages: number;
    query: {};
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
    query,
}) => {
    // destructuring untuk query params
    const {
        pokemonName,
        pokemonType,
        pokemonClassification,
        pokemonGender,
        heightOperator,
        heightValue,
        weightOperator,
        weightValue,
    } = query as QueryParams;

    // variabel untuk menyimpan object where clause
    const filterPokemon: any = {};

    if (pokemonName) {
        filterPokemon.name = {
            contains: pokemonName,
        };
    }

    if (pokemonType) {
        filterPokemon.OR = [
            {
                type1: {
                    in: pokemonType,
                },
            },
            {
                type2: {
                    in: pokemonType,
                },
            },
        ];
    }

    if (pokemonClassification) {
        filterPokemon.classification = {
            in: pokemonClassification,
        };
    }

    if (pokemonGender) {
        if (
            pokemonGender === "Mayoritas Male" ||
            pokemonGender === "Minoritas Female"
        ) {
            filterPokemon.percentage_male = {
                gt: 50,
            };
        }

        if (
            pokemonGender === "Mayoritas Female" ||
            pokemonGender === "Minoritas Male"
        ) {
            filterPokemon.percentage_male = {
                lt: 50,
            };
        }

        if (pokemonGender === "Balance") {
            filterPokemon.percentage_male = {
                equals: 50,
            };
        }
    }

    if (heightOperator && heightValue) {
        const heightFilters: any[] = [];

        for (let i = 0; i < heightOperator.length; i++) {
            if (heightOperator[i] === ">") {
                heightFilters.push({
                    height_m: { gt: Number(heightValue[i]) },
                });
            }

            if (heightOperator[i] === ">=") {
                heightFilters.push({
                    height_m: { gte: Number(heightValue[i]) },
                });
            }

            if (heightOperator[i] === "=") {
                heightFilters.push({
                    height_m: { equals: Number(heightValue[i]) },
                });
            }

            if (heightOperator[i] === "<") {
                heightFilters.push({
                    height_m: { lt: Number(heightValue[i]) },
                });
            }

            if (heightOperator[i] === "<=") {
                heightFilters.push({
                    height_m: { lte: Number(heightValue[i]) },
                });
            }
        }

        if (heightFilters.length > 0) {
            filterPokemon.OR = heightFilters;
        }
    }

    if (weightOperator && weightValue) {
        const weightFilters: any[] = [];

        for (let i = 0; i < weightOperator.length; i++) {
            if (weightOperator === ">") {
                weightFilters.push({
                    weight_kg: { gt: Number(weightValue[i]) },
                });
            }

            if (weightOperator === ">=") {
                weightFilters.push({
                    weight_kg: { gte: Number(weightValue[i]) },
                });
            }

            if (weightOperator === "=") {
                weightFilters.push({
                    weight_kg: { equals: Number(weightValue[i]) },
                });
            }

            if (weightOperator === "<") {
                weightFilters.push({
                    weight_kg: { lt: Number(weightValue[i]) },
                });
            }

            if (weightOperator === "<=") {
                weightFilters.push({
                    weight_kg: { lte: Number(weightValue[i]) },
                });
            }
        }

        if (weightFilters.length > 0) {
            filterPokemon.OR = weightFilters;
        }
    }

    console.log(filterPokemon);

    // variabel untuk menyimpan halaman user saat ini
    const currentPage: number = parseInt(query.page as string) || 1;

    // variabel untuk menyimpan total record pokemon di database
    const totalPokemons: number = await prisma.pokemon.count({
        where: filterPokemon,
    });

    // variabel untuk menyimpan total halaman pagiantion
    const totalPages: number = Math.ceil(totalPokemons / pokemonRecordPerPage);

    // variabel untuk menyimpan halaman user
    const page: number = Math.min(Math.max(1, currentPage), totalPages);

    // variabel untuk menyimpan berapa banyak content yang di skip
    const paginationStart: number = Math.max(
        0,
        (page - 1) * pokemonRecordPerPage
    );

    const pokemons = await prisma.pokemon.findMany({
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
        where: filterPokemon,
    });

    console.log(query);

    return {
        props: {
            pokemons: JSON.parse(JSON.stringify(pokemons)),
            currentPage: page,
            totalPages,
            query,
        },
    };
};

const PokemonServer = ({
    pokemons,
    currentPage,
    totalPages,
    query,
}: Props): JSX.Element => {
    const router = useRouter();

    const handlePrevious = () => {
        const prevPage = currentPage - 1;
        router.push({
            pathname: `/pokemon-server`,
            query: { ...router.query, page: prevPage },
        });
    };

    console.log(query);

    const handleNext = () => {
        const nextPage = currentPage + 1;
        router.push({
            pathname: `/pokemon-server`,
            query: { ...router.query, page: nextPage },
        });
    };

    const handlePageClick = (pageNumber: number) => {
        router.push({
            pathname: `/pokemon-server`,
            query: { ...router.query, page: pageNumber },
        });
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
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    renderPageNumber={renderPageNumber}
                    totalPages={totalPages}
                />
            )}
        </div>
    );
};

export default PokemonServer;
