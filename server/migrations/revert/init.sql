-- Revert madjikarite:init from pg

BEGIN;

DROP TABLE "admin",
"address",
"live_in",
"user_review",
"category",
"shopping_cart_lign",
"shopping_cart",
"product",
"user";

COMMIT;
