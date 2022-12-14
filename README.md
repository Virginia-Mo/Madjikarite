# projet-08-madjikarite

### projet-08-Madjikarité

<h1 align="center">Madjikarité</h1>

We have created an e-commerce site for a woman named Yankimadji who sells ethical and organic products. She actively fights against excision by giving work to women who practice this act in Tchad.

### Build with

We mainly used those libs to build our e-commerce website:

1.Front:

- React (Redux, React rputer DOM)
- SASS
- Semantic UI
- Javascript
- ESlint (airBnb)
- Webpack
- JEST

2.Back:

- PostgreSQL
- NodeJS
- Express
- dotEnv
- Bcrypt
- Sqitch
- ESlint (airBnb)

### Getting started

#### Installation

1. Clone the repo

   ```sh
   git@github.com:O-clock-Icare/projet-08-madjikarite.git
   ```

2. Install NPM or YARN

   ```sh
   npm install
   yarn install
   ```

3. Connect to PSQL:

   ```sh
   sudo -i -u postgres psql
   ```

4. Create new user:

   ```sh
   CREATE USER admin WITH PASSWORD 'YourPassword';
   ```

5. Create database:

   ```sh
   CREATE DATABASE madjikarite OWNER admin ;

6. Rename sqitch module:

   ```sh
   sqitch.example.conf -> sqitch.conf
   (adapt sqitch.conf according to your database\'name)
   ```

7. Rename dotEnv module:

   ```sh
   .env.example -> .env
   (adapt .env according to your user)
   ```

8. Link to data base

   ```sh
   'sqitch deploy' in terminal;
   ```

### About us

We are students from O'clock web school learning web development.

- Pierre G. <https://github.com/PierreGoursolas>,
- Virginia M. <https://github.com/Virginia-Mo>
- Caroline K. <https://github.com/madjikariteCaroline-K>,
- Jérémy N. <https://github.com/Jeremy-Nourri>,
- Nicolas Z. <https://github.com/NicolasZIELINSKI>.
