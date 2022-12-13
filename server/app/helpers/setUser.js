function setUser(req, res, next) {
    // TODo: delete req.session.user
    req.session.user = {
        id: 1,
        firstname: 'admin',
        role: 1,
    };
    req.user = req.session.user;
    next();
}

module.exports = setUser;
