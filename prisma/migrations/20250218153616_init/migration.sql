-- CreateTable
CREATE TABLE "dynasty" (
    "dynasty_id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "start_year" INTEGER NOT NULL,
    "end_year" INTEGER NOT NULL,

    CONSTRAINT "dynasty_pkey" PRIMARY KEY ("dynasty_id")
);

-- CreateTable
CREATE TABLE "author" (
    "author_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "intro" TEXT NOT NULL,
    "dynasty_id" TEXT NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "cipai" (
    "cipai_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "intro" TEXT NOT NULL,
    "dynasty_id" TEXT,

    CONSTRAINT "cipai_pkey" PRIMARY KEY ("cipai_id")
);

-- CreateTable
CREATE TABLE "poem" (
    "poem_id" TEXT NOT NULL,
    "title" VARCHAR(100),
    "cipai_id" TEXT,
    "subtitle" VARCHAR(100),
    "content" TEXT NOT NULL,
    "style" VARCHAR(2) NOT NULL,
    "dynasty_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,

    CONSTRAINT "poem_pkey" PRIMARY KEY ("poem_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dynasty_name_key" ON "dynasty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "author_name_key" ON "author"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cipai_name_key" ON "cipai"("name");
