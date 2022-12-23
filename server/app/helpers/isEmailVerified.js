function isEmailVerified(req, res, next) {
    if (req.user.email_verified === false) {
        throw new Error('Vous devez valider votre adresse email pour accéder à cette page');
    }
    next();
}

module.exports = isEmailVerified;
