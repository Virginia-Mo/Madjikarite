-- Verify madjikarite:picture on pg

BEGIN;

SELECT * FROM "picture" WHERE false;

ROLLBACK;
