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

INSERT INTO "aboutUs" ("title", "content")
VALUES
    ('MadjiKarité','«Madji» vient du «sar» une langue du sud du Tchad, qui signifie «bien», Madjikarité veut donc dire «les bienfaits du karité» ou encore traduit mot à mot: « karité quelque chose de bien». Les bienfaits du karité pour le corps, mais aussi  pour l’autonomisation de la femme. On retrouve «Madji» dans mon prénom Yankimadji, qui veut dire «quelque chose de bien», j’ai voulu traduire en acte ce joli prénom que je porte pour donner du sens à ma lutte pour l’égalité, «Madjikarité» «quelque chose de bien».

J’ai donc créé un produit naturel d’excellente qualité pour la beauté de vos peaux, une marque qui veut promouvoir l’autonomisation financière de la femme.

Madjikarité est une entreprise spécialisée dans le développement et la fabrication de gamme cosmétique biologique fait main à base de beurre de karité. l’ambition de Madjikarité est celle de promouvoir l’autonomisation financière des femmes en milieu rural, de lutter contre l’excision en donnant une activité aux exciseuses , contre la désertification par la plantation d’arbre de karité, de lutter contre la dépigmentation de la peau en proposant des produits naturels et bio et de promouvoir un développement durable au Tchad. La vision de Madjikarité est celle d’une société Tchadienne où chaque femme jouit de son autonomie financière. Sa mission est celle de lutter contre la pauvreté féminine au Tchad et promouvoir un développement durable. La garantie d’autonomie financière des femmes est une préoccupation fondamentale de Madjikarité.

L’entreprise s’engage pour l’équité et l’égalité de genre en donnant une activité génératrice de revenus aux femmes les plus défavorisées de la société. La base de mes produits est le beurre de karité pur non raffiné provenant du Burkina (ou les coopératives sont déjà formées et produisent du beurre de karité bio) et bientôt du Tchad ou les Coopératives de femmes seront prochainement créées par Madjikarité. Mes produits sont fabriqués en petite quantité avec la méthode de saponification à froid, méthode ancestrale qui permet de conserver la glycérine, ce qui confère à mes savons des propriétés hydratantes.

Yankimadji Rassembaye, la créatrice de Madjikarité.

Yankimadji RASSEMBAYE, 30ans, née à la campagne d’un père cultivateur et d’une mère ménagère, J’ai rejoint la ville de Sarh(Tchad) à l’âge de 4ans, ou mes parents m’avaient confiée à ma tante. À l’âge de 7 ans, ma tante m’a envoyée à l’école du quartier en échange j’aidais aux tâches ménagères de la maison. Tout a commencé quand un couple français est arrivé dans la famille de ma tante en 2000. J’ai été confié à ce couple. J’ai habité pendant 9 mois avec eux. Mon destin commença à faire son chemin. Au terme de son séjour au Tchad, le couple s’est engagé à prendre entièrement en charge ma vie scolaire. Grâce à eux j’ai pu accéder aux meilleures écoles et faire des études universitaires. Titulaire d’un master2 en Ingénierie des projets de coopération et d’une licence en gestion des entreprises, je me suis intéressée à la place de la femme dans le développement. Résultat de l’analyse: elles sont les plus pauvres. Après mon master, j’ai cherché du travail pendant 1an et demi dans les organismes de développement, le marché étant saturé, j’ai décidé de lancer mon projet professionnel. À l’instar de certains organismes de développement, j’ai décidé de mettre en place moi aussi un projet qui provoque le changement, le développement d’un territoire.

Désireuse de contribuer dans mon pays, à la lutte contre les inégalités femmes/ hommes, je cherche à renforcer l’autonomisation financière des femmes en Afrique (Burkina, Tchad) à partir de la mise en valeur des ressources locales aujourd’hui peu valorisées .La filière karité est peu développée au Tchad et il est établi par de nombreuses études qu’elle peut-être un levier de développement pour ce pays.

Ma motivation profonde est de contribuer à la lutte contre la pauvreté des femmes tchadiennes et de promouvoir un développement durable. Un autre enjeu est d’offrir aux consommateurs des produits de qualité issus du commerce équitable. Contrairement aux cultures destinées à l’exportation, l’arbre karité est un arbre sauvage qui permet de lutter contre la désertification. J’ai fait une rencontre qui a donné de la valeur à mon projet. J’ai rencontré Mme Russell Chinwe, la présidente de Sheabynature qui fabrique des produits naturels à base de karité depuis 15ans. Cette femme, m’a formé, m’a appris à faire les savons, les laits corporels, les beurres corporels et les beurres à lèvres. Mon ambition à terme serait de former quelques femmes Tchadiennes au Burkina et de créer une association pour que femmes tchadiennes et burkinabés puissent travailler ensemble. L’idée est de mettre en place une usine de beurre de karité biologique  et équitable en Afrique(Tchad), beurre de karité qui sera raffiné dans mes produits cosmétiques, fabriqués et commercialisés à partir de la France. J’ai donc fait le choix d’une démarche d’économie sociale et solidaire. Offrir aux consommateurs un produit naturel de qualité, et en contrepartie donner une activité et un salaire aux femmes en milieu rural. Étant donné qu’elles sont les plus pauvres, j’ai fait le choix de renforcer leur capacité en créant une marque cosmétique bio à base de karité pour leur donner un travail et un salaire…

DECOUVRIR PLUS en cliquant sur ce lien  : Interview de  Histoires Ordinaires:

https://www.histoiresordinaires.fr/Yankimadji-a-cree-son-entreprise-ici-pour-les-femmes-de-la-bas-au-Tchad_a2795.html'),

('Les vertus du beurre de karité', 'Naturellement riche en vitamine E et en acides gras, le beurre de karité possède des propriétés exceptionnelles pour les peaux délicates et sèches. Il est idéal pour nourrir, adoucir, protéger et revitaliser votre corps: talons, coudes, lèvres, cheveux secs et fatigués…Apaisant et réparateur, il est également très apprécié en soin après-soleil et apporte un réconfort immédiat.

Propriétés et bienfaits

L’utilisation quotidienne du beurre de karité combat le vieillissement de la peau. En recouvrant la peau d’une pellicule invisible, le beurre de karité, permet d’éviter sa déshydration et la protège des agressions de la nature : soleil, vent ou changements brusques de température. Connu pour calmer les peaux irritées comme pour la régénération de la peau, le beurre de karité est le plus efficace des anti-vieillissements naturels.

Visage et corps

Le karité nourrit et répare les lèvres auxquelles il apporte une brillance naturelle. Il nourrit et hydrate le nez irrité par les allergies ou les rhumes. Le beurre de karité rend la peau saine, hydratée et lisse.

Soin des cheveux

Le karité protège les cheveux, il leur apporte douceur, brillance et volume.

Peaux très sensibles

Le karité hydrate et illumine durablement le visage et le corps grâce à sa  concentration en vitamine F et E. recommandé aux peaux qui rougissent, à tendance allergique.

Grossesse et l’allaitement

Le karité prévient l’apparition et la formation des vergetures sur le ventre comme sur la poitrine et protège le bébé des rougeurs.

Sport

Le karité est très efficace sur les articulations des coudes et des genoux, le dessous des pieds et les talons. Appliqué sur la peau avant et après l’exercice physique, il la rend plus souple et atténue les callosités, permet une récupération rapide des muscles.'),

('PROCESSUS DE PRESSION MANUELLE DU BEURRE DE KARITÉ', 'Au Tchad, il n’y a pas de culture de l’arbre à karité. C’est un arbre très commun dans le sud du pays, que l’on trouve en brousse, autour des villages.

Tout commence avec le ramassage des fruits qui ne sont mûrs que lorsqu’ils sont tombés de l’arbre.

L’étape suivante est le dépulpage : la séparation de la chair et de la noix. La chair est comestible, très appréciée des enfants.

Les noix sont ensuite bouillies avant d’être pilées pour enlever la coque et récupérer les amandes.

Les amandes sont grillées puis broyées au moulin. La poudre est alors mélangée à de l’eau et malaxée pour obtenir une pâte blanc ivoire.

Cette pâte est enfin plongée dans de l’eau bouillante afin de séparer l’huile des impuretés.

Reposée à température ambiante, l’huile devient beurre de karité.'),

('Nos productrices, nos valeures', 'ceci est le texte sur les productrices Madjikarité')


COMMIT;