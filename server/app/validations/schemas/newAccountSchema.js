const joi = require('joi');

// Regex to check for strong password
/*
Une lettre en minuscule
Une lettre en majuscule
Un chiffre
Un caractère spécial (! @ # $ % ^ & *)
Un minimum de 8 caractères
*/
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
/* si la regex ne fonctionne pas, essayer celle ci:
"/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/"
*/

// Joi schema for login
const newAccount = joi.object({
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .regex(strongPasswordRegex)
        .required(),
}).required();

module.exports = newAccount;
