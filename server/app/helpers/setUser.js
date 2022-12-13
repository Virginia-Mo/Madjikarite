function setUser(req, res, next) {
    // TODO: delete req.session.user
    req.session.user = {
        id: 1,
        first_name: 'Larry',
        role: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwOTM3NDIxLCJleHAiOjE2NzA5NDEwMjF9.rLQu-FlyEqbhr5V3GTFa_CEnKeHrRMJwoSpisGGBOgE',
    };
    req.user = req.session.user;
    next();
}

module.exports = setUser;
