import fs from "fs";
import csvParser from "csv-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const main = async () => {
    try {
        const csvPath = "prisma/pokemon.csv"; // Path file CSV Anda
        const results: any[] = [];

        // Membaca file CSV
        fs.createReadStream(csvPath)
            .pipe(csvParser())
            .on("data", (data) => {
                results.push(data);
            })
            .on("end", async () => {
                // Memasukkan data ke database menggunakan Prisma
                for (let i = 0; i < results.length; i++) {
                    const pokemon = results[i];
                    const storedPokemon = await prisma.pokemon.create({
                        data: {
                            id: i + 1,
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
                            capture_rate: parseFloat(pokemon.capture_rate),
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

                console.log("Data berhasil dipindahkan ke database.");
            });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    } finally {
        await prisma.$disconnect();
    }
};

main();
