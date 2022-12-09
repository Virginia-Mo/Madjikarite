-- Revert madjikarite:data from pg

BEGIN;

TRUNCATE TABLE "product", "category" RESTART IDENTITY CASCADE;

COMMIT;
