-- CreateTable
CREATE TABLE `Abilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `pokemon_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pokemon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `against_bug` DOUBLE NOT NULL,
    `against_dark` DOUBLE NOT NULL,
    `against_dragon` DOUBLE NOT NULL,
    `against_electric` DOUBLE NOT NULL,
    `against_fairy` DOUBLE NOT NULL,
    `against_fight` DOUBLE NOT NULL,
    `against_fire` DOUBLE NOT NULL,
    `against_flying` DOUBLE NOT NULL,
    `against_ghost` DOUBLE NOT NULL,
    `against_grass` DOUBLE NOT NULL,
    `against_ground` DOUBLE NOT NULL,
    `against_ice` DOUBLE NOT NULL,
    `against_normal` DOUBLE NOT NULL,
    `against_poison` DOUBLE NOT NULL,
    `against_psychic` DOUBLE NOT NULL,
    `against_rock` DOUBLE NOT NULL,
    `against_steel` DOUBLE NOT NULL,
    `against_water` DOUBLE NOT NULL,
    `attack` DOUBLE NOT NULL,
    `base_egg_steps` DOUBLE NOT NULL,
    `base_happiness` DOUBLE NOT NULL,
    `base_total` DOUBLE NOT NULL,
    `capture_rate` DOUBLE NOT NULL,
    `classification` VARCHAR(200) NOT NULL,
    `defense` DOUBLE NOT NULL,
    `experience_growth` DOUBLE NOT NULL,
    `height_m` DOUBLE NOT NULL,
    `hp` DOUBLE NOT NULL,
    `japanese_name` VARCHAR(200) NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `percentage_male` DOUBLE NOT NULL,
    `pokedex_number` DOUBLE NOT NULL,
    `sp_attack` DOUBLE NOT NULL,
    `sp_defense` DOUBLE NOT NULL,
    `speed` DOUBLE NOT NULL,
    `type1` VARCHAR(50) NOT NULL,
    `type2` VARCHAR(50) NOT NULL,
    `weight_kg` DOUBLE NOT NULL,
    `generation` DOUBLE NOT NULL,
    `is_legendary` BOOLEAN NOT NULL,
    `image` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Abilities` ADD CONSTRAINT `Abilities_pokemon_id_fkey` FOREIGN KEY (`pokemon_id`) REFERENCES `Pokemon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
