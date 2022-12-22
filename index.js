require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');

// on importe le router
const router = require('./server/app/routers/mainRouter');

const PORT = process.env.PORT || 5000;

const app = express();

// We add a middleware to enable the CORS
app.use(cors('localhost:8080'));

// Add a body parser middleware : enable to treat the requests body
app.use(express.urlencoded({ extended: true }));
// Form URL encoded
app.use(express.json()); // JSON

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: { secure: true },
}));

// We use the router
app.use(router);

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

// We start the server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
