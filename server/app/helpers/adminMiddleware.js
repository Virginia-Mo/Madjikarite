function adminMiddleware(id) {
    return (req, res, next) => {
        if (!req.user.role === id) {
            res.status(403).send('Unauthorized');
        }
        next();
    };
}

module.exports = adminMiddleware;
