require('dotenv').config();

const express = require('express');
const cors = require('cors');

// on importe le router
const router = require('./server/app/routers/mainRouter');

// un peu de config
const PORT = process.env.PORT || 5000;

const app = express();

// Add a body parser middleware : enable to treat the requests body
app.use(express.urlencoded({ extended: true }));
// Form URL encoded
app.use(express.json()); // JSON

app.use(cors(process.env.CORS_DOMAINS ?? '*'));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
