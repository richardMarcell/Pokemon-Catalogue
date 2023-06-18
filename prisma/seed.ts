import fs from "fs";
import csvParser from "csv-parser";
import { Pokemon, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PokemonImagesJson {
    name: string;
    image_url: string;
}

interface Pokemons {
    against_bug: number;
    against_dark: number;
    against_dragon: number;
    against_electric: number;
    against_fairy: number;
    against_fight: number;
    against_fire: number;
    against_flying: number;
    against_ghost: number;
    against_grass: number;
    against_ground: number;
    against_ice: number;
    against_normal: number;
    against_poison: number;
    against_psychic: number;
    against_rock: number;
    against_steel: number;
    against_water: number;
    attack: number;
    base_egg_steps: number;
    base_happiness: number;
    base_total: number;
    capture_rate: number;
    classification: string;
    defense: number;
    experience_growth: number;
    height_m: number;
    hp: number;
    japanese_name: string;
    name: string;
    percentage_male: number;
    pokedex_number: number;
    sp_attack: number;
    sp_defense: number;
    speed: number;
    type1: string;
    type2: string;
    weight_kg: number;
    generation: number;
    is_legendary: boolean;
    image: string | null;
    abilities: string;
}

const getPokemonImagesByObject = (
    pokemonImagesJson: PokemonImagesJson[],
    pokemonName: string
) => {
    const pokemonImages: { [key: string]: string } = {};

    for (let i = 0; i < pokemonImagesJson.length; i++) {
        const { name, image_url } = pokemonImagesJson[i];
        pokemonImages[name] = image_url;
    }

    return pokemonImages[pokemonName];
};

const getPokemonImagesByHashMap = (
    pokemonImagesJson: PokemonImagesJson[],
    pokemonName: string
) => {
    const pokemonImages = new Map();
    pokemonImagesJson.forEach((pokemonImage) => {
        pokemonImages.set(pokemonImage.name, pokemonImage.image_url);
    });

    if (
        pokemonImages.get(pokemonName) === undefined ||
        pokemonImages.get(pokemonName) === "" ||
        pokemonImages.get(pokemonName) === null
    ) {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1024px-Pok%C3%A9_Ball_icon.svg.png";
    } else {
        return pokemonImages.get(pokemonName);
    }
};

export const main = async () => {
    try {
        const csvFilePath = "prisma/pokemon.csv"; // Path file CSV Anda
        const pokemonImageFilePath = "prisma/pokemon_image.json"; // Path file CSV Anda
        const pokemons: Pokemons[] = [];

        const pokemonImagesJson: PokemonImagesJson[] = JSON.parse(
            fs.readFileSync(pokemonImageFilePath, "utf-8")
        );

        // Membaca file CSV
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on("data", (rowOfCsv) => {
                pokemons.push(rowOfCsv);
            })
            .on("end", async () => {
                // Memasukkan data ke database menggunakan Prisma
                for (let i = 0; i < pokemons.length; i++) {
                    const pokemon = pokemons[i];

                    // mengubah nama pokemon menjadi huruf kecil semua
                    const pokemonNameToLower = pokemon.name.toLowerCase();
                    const storedPokemon = await prisma.pokemon.create({
                        data: {
                            against_bug: Number(pokemon.against_bug),
                            against_dark: Number(pokemon.against_dark),
                            against_dragon: Number(pokemon.against_dragon),
                            against_electric: Number(pokemon.against_electric),
                            against_fairy: Number(pokemon.against_fairy),
                            against_fight: Number(pokemon.against_fight),
                            against_fire: Number(pokemon.against_fire),
                            against_flying: Number(pokemon.against_flying),
                            against_ghost: Number(pokemon.against_ghost),
                            against_grass: Number(pokemon.against_grass),
                            against_ground: Number(pokemon.against_ground),
                            against_ice: Number(pokemon.against_ice),
                            against_normal: Number(pokemon.against_normal),
                            against_poison: Number(pokemon.against_poison),
                            against_psychic: Number(pokemon.against_psychic),
                            against_rock: Number(pokemon.against_rock),
                            against_steel: Number(pokemon.against_steel),
                            against_water: Number(pokemon.against_water),
                            attack: Number(pokemon.attack),
                            base_egg_steps: Number(pokemon.base_egg_steps),
                            base_happiness: Number(pokemon.base_happiness),
                            base_total: Number(pokemon.base_total),
                            capture_rate: Number(pokemon.capture_rate),
                            classification: pokemon.classification,
                            defense: Number(pokemon.defense),
                            experience_growth: Number(
                                pokemon.experience_growth
                            ),
                            height_m: Number(pokemon.height_m),
                            hp: Number(pokemon.hp),
                            japanese_name: pokemon.japanese_name,
                            name: pokemon.name,
                            percentage_male: Number(pokemon.percentage_male),
                            pokedex_number: Number(pokemon.pokedex_number),
                            sp_attack: Number(pokemon.sp_attack),
                            sp_defense: Number(pokemon.sp_defense),
                            speed: Number(pokemon.speed),
                            type1: pokemon.type1,
                            type2: pokemon.type2,
                            weight_kg: Number(pokemon.weight_kg),
                            generation: Number(pokemon.generation),
                            is_legendary: Boolean(pokemon.is_legendary),

                            //dengan object
                            // image: getPokemonImagesByObject(
                            //     pokemonImagesJson,
                            //     pokemonNameToLower
                            // ),

                            // dengan hash map
                            image: getPokemonImagesByHashMap(
                                pokemonImagesJson,
                                pokemonNameToLower
                            ),
                        },
                    });

                    // Memasukkan abilities
                    const abilities = pokemon.abilities
                        .split(",")
                        .map((ability: string) =>
                            ability.replace(/[\[\]']/g, "").trim()
                        );

                    for (let j = 0; j < abilities.length; j++) {
                        const ability = abilities[j];
                        await prisma.abilities.create({
                            data: {
                                name: ability,
                                pokemon: {
                                    connect: {
                                        id: storedPokemon.id,
                                    },
                                },
                            },
                        });
                    }
                }
            });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
};

main();
