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
    `against_bug` INTEGER NOT NULL,
    `against_dark` INTEGER NOT NULL,
    `against_dragon` INTEGER NOT NULL,
    `against_electric` INTEGER NOT NULL,
    `against_fairy` INTEGER NOT NULL,
    `against_fight` INTEGER NOT NULL,
    `against_fire` INTEGER NOT NULL,
    `against_flying` INTEGER NOT NULL,
    `against_ghost` INTEGER NOT NULL,
    `against_grass` INTEGER NOT NULL,
    `against_ground` INTEGER NOT NULL,
    `against_ice` INTEGER NOT NULL,
    `against_normal` INTEGER NOT NULL,
    `against_poison` INTEGER NOT NULL,
    `against_physic` INTEGER NOT NULL,
    `against_rock` INTEGER NOT NULL,
    `against_steel` INTEGER NOT NULL,
    `against_water` INTEGER NOT NULL,
    `attack` INTEGER NOT NULL,
    `base_egg_steps` INTEGER NOT NULL,
    `base_happiness` INTEGER NOT NULL,
    `base_total` INTEGER NOT NULL,
    `capture_rate` INTEGER NOT NULL,
    `classification` VARCHAR(60) NOT NULL,
    `defense` INTEGER NOT NULL,
    `experience_growth` INTEGER NOT NULL,
    `height_m` INTEGER NOT NULL,
    `hp` INTEGER NOT NULL,
    `japanese_name` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `persentage_male` INTEGER NOT NULL,
    `pokedex_number` INTEGER NOT NULL,
    `sp_attack` INTEGER NOT NULL,
    `sp_defense` INTEGER NOT NULL,
    `speed` INTEGER NOT NULL,
    `type1` VARCHAR(50) NOT NULL,
    `type2` VARCHAR(50) NOT NULL,
    `weight_kg` INTEGER NOT NULL,
    `generation` INTEGER NOT NULL,
    `is_legendary` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Abilities` ADD CONSTRAINT `Abilities_pokemon_id_fkey` FOREIGN KEY (`pokemon_id`) REFERENCES `Pokemon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
