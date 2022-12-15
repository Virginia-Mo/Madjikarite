BEGIN;

TRUNCATE "role", "address", "user", "user_review", "order", "live_in" RESTART IDENTITY;

INSERT INTO "role" ("name") 
VALUES
    ('admin'),
    ('user');

INSERT INTO "address" ("address", "zip_code", "city", "country") 
VALUES
    ('8 rue tartanpion', '45356', 'Pau', 'France'),
    ('10 avenue de la tarte', '24534', 'Marseille', 'France'),
    ('54 avenida de la mare', '12902', 'Madrid', 'Espagne'),
    ('18 rue de la chute', '35510', 'Paris', 'France');

INSERT INTO "user" ("first_name", "last_name", "email", "phone_number", "password", "role_id" ) 
VALUES
    ('Larry', 'Bambelle', 'larry.bambelle@gmail.com', '0606060606', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 1),
    ('Sarah', 'Courci', 'sarah.courci@hotmail.fr', '0612345678', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 2),
    ('Dave', 'Lopper', 'dave.lopper@yahoo.com', '0698765432', '$2b$10$vh9rQ95D3gJ255hDcAqUcerl9pXyvhMwqUue1Mydf63W9Lac5lkYe', 2);

INSERT INTO "user_review" ("note", "content", "product_id", "user_id") 
VALUES
    (5, 'Très bon produit, je recommande', 1, 1),
    (4, 'Pas mal, mais je préfère le savon solide à la lavande', 1, 2),
    (3, 'Pas mal, mais je préfère le savon solide à la lavande', 2, 3),
    (5, 'Très bien', 2, 1);

INSERT INTO "order" ("cart", "message", "final_price", "user_id", "address_id") 
VALUES
    ('{{{"id", 1}, {"name", "test"}, {"quantity", 2}, {"price", 6}, {"total", 12}}, {{"id", 2}, {"name", "test2"}, {"quantity", 4}, {"price", 6}, {"total", 24}}}', 'cadeau', 40.50, 3, 3),
    ('{{{"id", 2}, {"name", "test2"}, {"quantity", 1}, {"price", 6}, {"total", 6}}, {{"id", 8}, {"name", "test8"}, {"quantity", 5}, {"price", 6}, {"total", 30}}}', 'cadeau', 62, 3, 3),
    ('{{{"id", 3}, {"name", "test3"}, {"quantity", 3}, {"price", 6}, {"total", 18}}, {{"id", 10}, {"name", "test10"}, {"quantity", 6}, {"price", 6}, {"total", 36}}}', 'cadeau', 75, 1, 1);

INSERT INTO "live_in" ("user_id", "address_id") 
VALUES
    (1, 1),
    (1, 2),
    (3, 3),
    (3, 4);

COMMIT;