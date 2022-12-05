-- Verify madjikarite:init on pg

BEGIN;

SELECT * FROM "admin" WHERE false;
SELECT * FROM "address" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "user" WHERE false;
SELECT * FROM "product" WHERE false;
SELECT * FROM "user_review" WHERE false;
SELECT * FROM "shopping_cart" WHERE false;
SELECT * FROM "shopping_cart_lign" WHERE false;
SELECT * FROM "live_in" WHERE false;

ROLLBACK;
