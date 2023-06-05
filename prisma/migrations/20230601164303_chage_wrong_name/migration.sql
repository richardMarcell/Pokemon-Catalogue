/*
  Warnings:

  - You are about to drop the column `against_physic` on the `pokemon` table. All the data in the column will be lost.
  - Added the required column `against_psychic` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` DROP COLUMN `against_physic`,
    ADD COLUMN `against_psychic` DOUBLE NOT NULL;
