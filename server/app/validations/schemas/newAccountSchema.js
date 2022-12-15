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

/* Regex to check for email:
Le nom d'utilisateur de l'adresse email, qui peut comprendre des lettres,
des chiffres, des points, des tirets et des underscore.
Le symbole "@" qui sépare le nom d'utilisateur du domaine de l'adresse email.
Le domaine de l'adresse email, qui peut comprendre des lettres, des chiffres,
des points et des tirets.
L'extension de l'adresse email, qui doit être composée de 2 à 4 lettres.
*/
// const constrainteEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

const constraintName = /^[A-Za-z][A-Za-z-]*[A-Za-z]$/;

// Joi schema for login
const newAccount = joi.object({
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .regex(strongPasswordRegex)
        .required(),
    first_name: joi.string()
        .regex(constraintName)
        .min(2)
        .max(20)
        .required(),
    last_name: joi.string()
        .regex(constraintName)
        .min(2)
        .max(20)
        .required(),
    phone_number: joi.string()
        .regex(/^(?:(?:\+|00)33\s(?:\(0\)\s)?|0)[1-9](?:\s?\d{2}){4}|\d{2}(?:\s?\d{3}){2}$/)
        .required(),
    address: joi.string()
        .min(2)
        .max(50)
        .required(),
    zip_code: joi.string()
        .regex(/^0[1-9]\d{3}$|^1\d{4}$|^20(2\d{2}|300|600|620)$|^2[1-8]\d{3}$|29([12]\d{2}|300)$|29570|^[3-8]\d{4}$|^9[0-5]\d{3}$|^96\d{3}$|^97[1-8]\d{2}$|^98[4678]\d{2}$|^99999$/)
        .required(),
    city: joi.string()
        .regex(constraintName)
        .min(2)
        .max(30)
        .required(),
    country: joi.string()
        .regex(constraintName)
        .min(2)
        .max(20)
        .required(),
}).required();

module.exports = newAccount;
