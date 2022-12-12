function authUser(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(403).send('Unauthorized');
    }
}

module.exports = authUser;
