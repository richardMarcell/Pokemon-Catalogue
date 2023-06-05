/*
  Warnings:

  - You are about to alter the column `weight_kg` on the `pokemon` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `pokemon` MODIFY `weight_kg` DOUBLE NOT NULL;
