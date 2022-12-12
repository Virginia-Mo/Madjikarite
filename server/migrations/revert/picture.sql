-- Revert madjikarite:picture from pg

BEGIN;

DROP TABLE "represent", "picture";

COMMIT;
