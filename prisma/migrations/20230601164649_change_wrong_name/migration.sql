/*
  Warnings:

  - You are about to drop the column `persentage_male` on the `pokemon` table. All the data in the column will be lost.
  - Added the required column `percentage_male` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemon` DROP COLUMN `persentage_male`,
    ADD COLUMN `percentage_male` DOUBLE NOT NULL;
