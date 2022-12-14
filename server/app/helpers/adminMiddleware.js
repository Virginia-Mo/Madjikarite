function adminMiddleware(id) {
    // eslint-disable-next-line consistent-return
    return (req, res, next) => {
        if (req.user.role !== id) {
            return res.status(403).send('Unauthorized');
        }
        next();
    };
}

module.exports = adminMiddleware;
