require('dotenv').config();

const express = require('express');

// on importe le router
const router = require('./server/app/routers/mainRouter');

// un peu de config
const PORT = process.env.PORT || 5000;

const app = express();

// Add a body parser middleware : enable to treat the requests body
app.use(express.urlencoded({ extended: true }));
// Form URL encoded
app.use(express.json()); // JSON

// ejs
// app.set('view engine', 'ejs');
// app.set('views', `${__dirname}/app/views`);

// servir les fichiers statiques qui sont dans "integration"
// app.use(express.static('integration'));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
