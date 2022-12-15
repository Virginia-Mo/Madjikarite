-- Revert madjikarite:init from pg

BEGIN;

DROP TABLE "role",
"address",
"live_in",
"user_review",
"category",
"order",
"product",
"user";

COMMIT;
