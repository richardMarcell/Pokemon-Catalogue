/*
  Warnings:

  - You are about to alter the column `against_bug` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_dark` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_dragon` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_electric` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_fairy` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_fight` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_fire` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_flying` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_ghost` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_grass` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_ground` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_ice` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_normal` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_poison` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_physic` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_rock` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_steel` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `against_water` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `attack` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `base_egg_steps` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `base_happiness` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `base_total` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `capture_rate` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `defense` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `experience_growth` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `height_m` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `hp` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `persentage_male` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `pokedex_number` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `sp_attack` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `sp_defense` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `speed` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `weight_kg` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `generation` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `pokemon` MODIFY `against_bug` DOUBLE NOT NULL,
    MODIFY `against_dark` DOUBLE NOT NULL,
    MODIFY `against_dragon` DOUBLE NOT NULL,
    MODIFY `against_electric` DOUBLE NOT NULL,
    MODIFY `against_fairy` DOUBLE NOT NULL,
    MODIFY `against_fight` DOUBLE NOT NULL,
    MODIFY `against_fire` DOUBLE NOT NULL,
    MODIFY `against_flying` DOUBLE NOT NULL,
    MODIFY `against_ghost` DOUBLE NOT NULL,
    MODIFY `against_grass` DOUBLE NOT NULL,
    MODIFY `against_ground` DOUBLE NOT NULL,
    MODIFY `against_ice` DOUBLE NOT NULL,
    MODIFY `against_normal` DOUBLE NOT NULL,
    MODIFY `against_poison` DOUBLE NOT NULL,
    MODIFY `against_physic` DOUBLE NOT NULL,
    MODIFY `against_rock` DOUBLE NOT NULL,
    MODIFY `against_steel` DOUBLE NOT NULL,
    MODIFY `against_water` DOUBLE NOT NULL,
    MODIFY `attack` DOUBLE NOT NULL,
    MODIFY `base_egg_steps` DOUBLE NOT NULL,
    MODIFY `base_happiness` DOUBLE NOT NULL,
    MODIFY `base_total` DOUBLE NOT NULL,
    MODIFY `capture_rate` DOUBLE NOT NULL,
    MODIFY `classification` VARCHAR(200) NOT NULL,
    MODIFY `defense` DOUBLE NOT NULL,
    MODIFY `experience_growth` DOUBLE NOT NULL,
    MODIFY `height_m` DOUBLE NOT NULL,
    MODIFY `hp` DOUBLE NOT NULL,
    MODIFY `japanese_name` VARCHAR(200) NOT NULL,
    MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `persentage_male` DOUBLE NOT NULL,
    MODIFY `pokedex_number` DOUBLE NOT NULL,
    MODIFY `sp_attack` DOUBLE NOT NULL,
    MODIFY `sp_defense` DOUBLE NOT NULL,
    MODIFY `speed` DOUBLE NOT NULL,
    MODIFY `weight_kg` DOUBLE NOT NULL,
    MODIFY `generation` DOUBLE NOT NULL;
