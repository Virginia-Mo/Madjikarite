const notFoundError = {
    test: class NotFoundError extends Error {
        constructor(message) {
            super(message);
            this.name = 'NotFoundError';
            this.status = 404;
        }
    },
};

module.exports = notFoundError;
