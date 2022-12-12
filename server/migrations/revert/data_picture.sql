-- Revert madjikarite:data_picture from pg

BEGIN;

TRUNCATE "picture", "represent" RESTART IDENTITY CASCADE;

COMMIT;
