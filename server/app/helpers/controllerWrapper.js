const controllerWrapper = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

module.exports = controllerWrapper;
