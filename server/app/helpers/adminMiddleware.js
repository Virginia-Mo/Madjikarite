function adminMiddleware(id) {
    // eslint-disable-next-line consistent-return
    return (req, res, next) => {
        console.log('je passe dans le middleware');
        if (req.user.role !== id) {
            console.log('je passe dans le if');
            return res.status(403).send('Unauthorized');
        }
        console.log('je passe dans le next');
        next();
    };
}

module.exports = adminMiddleware;
