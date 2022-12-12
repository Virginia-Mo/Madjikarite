-- Deploy madjikarite:picture to pg

BEGIN;

DROP TABLE IF EXISTS "picture", "represent";

CREATE TABLE "picture" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "represent" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "picture_id" INT NOT NULL REFERENCES "picture" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "product_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);


COMMIT;
