function setUser(req, res, next) {
    // TODO: delete req.session.user
    req.session.user = {
        id: 1,
        first_name: 'Larry',
        role: 1,
    };
    req.user = req.session.user;
    console.log(req.user);
    next();
}

module.exports = setUser;
