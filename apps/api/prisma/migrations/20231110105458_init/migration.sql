-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mass" INTEGER NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" TEXT NOT NULL,
    "crew" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_name_key" ON "Person"("name");
