function setUser(req, res, next) {
    req.session.user = {
        id: 1,
        firstname: 'admin',
        role: 1,
    };
    req.user = req.session.user;
    next();
}

module.exports = setUser;
