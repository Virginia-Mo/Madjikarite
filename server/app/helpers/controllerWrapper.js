const controllerWrapper = (controller) => async (req, res) => {
    try {
        await controller(req, res);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
};

module.exports = controllerWrapper;
