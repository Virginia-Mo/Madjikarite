BEGIN;

TRUNCATE "admin", "address", "category", "user", "product", "user_review", "shopping_cart_lign", "shopping_cart", "live_in" RESTART IDENTITY;

INSERT INTO "admin" ("email", "password") 
VALUES
    ('yuki@gmail.com', 'test');

INSERT INTO "address" ("address", "zip_code", "country") 
VALUES
    ('8 rue tartanpion', '45356', 'France'),
    ('10 avenue de la tarte', '24534', 'France'),
    ('54 avenida de la mare', '12902', 'Espagne'),
    ('18 rue de la chute', '35510', 'France');

INSERT INTO "category" ("name") 
VALUES
    ('Beurre coprorel'),
    ('Beurre levres'),
    ('Beurre pur'),
    ('Savon surgras liquide'),
    ('Savon surgras solide');

INSERT INTO "user" ("civility", "first_name", "last_name", "email", "phone_number", "password" ) 
VALUES
    ('M', 'Larry', 'Bambelle', 'larry.bambelle@gmail.com', '0606060606', 'test'),
    ('Mme', 'Sarah', 'Courci', 'sarah.courci@hotmail.fr', '0612345678', 'test'),
    ('M', 'Dave', 'Lopper', 'dave.lopper@yahoo.com', '0698765432', 'test');


INSERT INTO "product" ("name", "short_description", "full_description", "ingredients", "packaging", "price", "stock", "admin_id", "category_id") 
VALUES
('Savon solide parfum rose et géranium', 
'Savon surgras fait main fabriqué à partir d''ingrédients naturels de rose et géranium. Un savon crémeux avec une mousse riche pour tous types de peau.',
'Un savon idéal pour la toilette quotidienne du corps, la peau retrouve sa douceur et son velouté. La glycérine végétale laisse un film protecteur sur la peau qui est parfaitement nettoyée sans être agressée. Le géranium est très efficace pour assécher une peau trop grasse, hydrater une peau sèche et refermer les pores dilatés de la peau. La rose est connue pour ses actions régénérant cutanée puissante et anti-âge. Elle est idéale pour nourrir les peaux sèches, abîmées et couperosées, lutter contre les rides et atténuer les vergetures et cicatrices.',
'Les ingrédients clés comprennent : le beurre de karité bio, huile de coco, l’huile d’olive, l’huile de tournesol, parfum de rose et géranium. INCI :: sodium olivate (huile d''olive saponifiée), sodium cocoate (huile de noix de coco saponifiée), Aqua (eau), Butyrospermum parkii butter (beurre de karité), sunflower seed oil, Pelargonium asperum oil, Aniba rosaeodora wood , Tocopheryl acetate, allergene : citral, geraniol linalool, citronellol, limonene, benzyl benzoate.', '145-155 g',
6,
15, 
1, 
5),

('Savon solide parfum lavande',
'Savon surgras fait main fabriqué à partir d''ingrédients naturels et des vrais bourgeons de lavande. Un savon crémeux avec une mousse riche pour tous types de peau.',
'Un savon idéal pour la toilette quotidienne du corps, la peau retrouve sa douceur et son velouté. La glycérine végétale laisse un film protecteur sur la peau qui est parfaitement nettoyée sans être agressée. L''huile essentielle de lavande laisse une odeur agréable.
Régénérante et réparatrice, cette huile essentielle de Lavande s''utilise sur les cicatrices, petites plaies et infections cutanées. Calmante et sédative, elle favorise le sommeil, l''élimination des tensions nerveuses, des migraines et des douleurs musculaires.',
'Les ingrédients clés comprennent : le beurre de karité bio, l''huile de coco, l''huile d’olive, l''huile de tournesol, l''huile essentielle de lavande et les fleurs de lavande. Ingrédients issus de l''agriculture biologique. INCI : sodium olivate (huile d''olive saponifiée), sodium cocoate (huile de noix de coco saponifiée), Aqua (eau), Butyrospermum parkii butter ( beurre de karité), sunflower seed oil, Lavandula angustifolia oil, Lavandula vera, Tocopheryl acetate. Allergène : geraniol, linalool, limonene.',
'145-155 g',
6, 
2, 
1, 
4),

('Savon solide parfum citron et mangue', 
'Savon surgras fait main fabriqué à partir d''ingrédients naturels de mangue et de citron. Un savon crémeux avec une mousse riche pour tous types de peau.', 
'Un savon idéal pour la toilette quotidienne du corps, la peau retrouve sa douceur et son velouté. La glycérine végétale laisse un film protecteur sur la peau qui est parfaitement nettoyée sans être agressée. Le parfum de mangue reconnu pour ses propriétés assouplissantes, adoucissantes, nourrissantes, cicatrisantes et filtre solaire naturel léger, ajouté  au citron qui adoucit et tonifie l''épiderme en contractant les tissus, c''est deux parfum sont parfait  pour votre peau.', 
'Les ingrédients clés comprennent : le beurre de karité bio, huile de coco, l’huile d’olive, l’huile de tournesol, parfum de mangue et citron. Ingrédients issus de l''agriculture biologique. INCI: sodium olivate (huile d''olive saponifiée), sodium cocoate (huile de noix de coco saponifiée), Aqua (eau), Butyrospermum parkii butter (beurre de karité), sunflower seed oil, Citrus limon peel oil, Mangifera Indica, Tocopheryl acetate. Allergene: citral, geraniol, linalool,limonene,benzyl benzoate, benzyl salicylate,citronellol, hexyl cinnamic, liliestralis22, methyl ionone, orange terpenes/d-limonene.', 
'145-155 g', 
6, 
0, 
1, 
3);

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