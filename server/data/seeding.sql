BEGIN;

TRUNCATE "role", "address", "user", "user_review", "shopping_cart_lign", "shopping_cart", "live_in" RESTART IDENTITY;

INSERT INTO "role" ("name") 
VALUES
    ('admin'),
    ('user');

INSERT INTO "address" ("address", "zip_code", "country") 
VALUES
    ('8 rue tartanpion', '45356', 'France'),
    ('10 avenue de la tarte', '24534', 'France'),
    ('54 avenida de la mare', '12902', 'Espagne'),
    ('18 rue de la chute', '35510', 'France');

INSERT INTO "user" ("civility", "first_name", "last_name", "email", "phone_number", "password", "role_id" ) 
VALUES
    ('M', 'Larry', 'Bambelle', 'larry.bambelle@gmail.com', '0606060606', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 1),
    ('Mme', 'Sarah', 'Courci', 'sarah.courci@hotmail.fr', '0612345678', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 2),
    ('M', 'Dave', 'Lopper', 'dave.lopper@yahoo.com', '0698765432', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 2);

INSERT INTO "user_review" ("note", "content", "product_id", "user_id") 
VALUES
    (5, 'Très bon produit, je recommande', 1, 1),
    (4, 'Pas mal, mais je préfère le savon solide à la lavande', 1, 2),
    (3, 'Pas mal, mais je préfère le savon solide à la lavande', 2, 3),
    (5, 'Très bien', 2, 1);

INSERT INTO "shopping_cart" ("total_price", "message", "user_id") 
VALUES
    ('12.95', 'cadeau', 1),
    ('9.99', 'tiens', 2),
    ('9523', 'whaa', 3);

INSERT INTO "shopping_cart_lign" ("quantity", "shopping_cart_id", "product_id") 
VALUES
    (1, 1, 1),
    (2, 1, 2),
    (1, 2, 1),
    (1, 3, 2),
    (3, 3, 3);

INSERT INTO "live_in" ("user_id", "address_id") 
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (3, 4);

COMMIT;