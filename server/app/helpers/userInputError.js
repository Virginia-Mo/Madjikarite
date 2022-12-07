const notFoundError = {
    test: class UserInputError extends Error {
        constructor(message) {
            super(message);
            this.name = 'UserInputError';
            this.status = 400;
        }
    },
};

module.exports = notFoundError;
