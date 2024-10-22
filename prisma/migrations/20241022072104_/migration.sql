/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "link" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_link_key" ON "Project"("link");
