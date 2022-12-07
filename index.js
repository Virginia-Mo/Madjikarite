require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');

// on importe le router
const router = require('./server/app/routers/mainRouter');

// un peu de config
const PORT = process.env.PORT || 5000;

const app = express();

// on ajoute le middleware cors
app.use(cors('*'));

// Add a body parser middleware : enable to treat the requests body
app.use(express.urlencoded({ extended: true }));
// Form URL encoded
app.use(express.json()); // JSON

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
}));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
