-- Deploy madjikarite:init to pg

BEGIN;

DROP TABLE IF EXISTS "role",
"address",
"live_in",
"user_review",
"category",
"shopping_cart_lign",
"shopping_cart",
"product",
"user";

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);

CREATE TABLE "address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "address" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "civility" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "phone_number" INT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INT REFERENCES "role" ("id") DEFAULT 2,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "full_description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "price" NUMERIC NOT NULL,
    "stock" INT DEFAULT 0,
    "category_id" INT NOT NULL REFERENCES "category" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_review" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "note" INT NOT NULL,
    "content" TEXT,
    "product_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);


CREATE TABLE "shopping_cart" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "total_price" NUMERIC NOT NULL,
    "message" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "live_in" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "address_id" INT NOT NULL REFERENCES "address" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ 
);


CREATE TABLE "shopping_cart_lign" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quantity" INT NOT NULL,
    "shopping_cart_id" INT NOT NULL REFERENCES "shopping_cart" ("id") ON DELETE CASCADE,
    "product_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE "user" ADD COLUMN "shopping_cart_id" INT REFERENCES "shopping_cart" ("id") ON DELETE CASCADE;

COMMIT;
