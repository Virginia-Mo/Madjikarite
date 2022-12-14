const joi = require('joi');

const profileSchema = joi.object({
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .min(8)
        .max(20)
        .required(),
    first_name: joi.string()
        .min(2)
        .max(20)
        .required(),
    last_name: joi.string()
        .min(2)
        .max(20)
        .required(),
    address: joi.string()
        .min(2)
        .max(50)
        .required(),
    zip_code: joi.string()
        .min(2)
        .max(20)
        .required(),
    city: joi.string()
        .min(2)
        .max(20)
        .required(),
    country: joi.string()
        .min(2)
        .max(20)
        .required(),
}).required();

module.exports = profileSchema;
