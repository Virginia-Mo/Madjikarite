const aboutUsController = {

    // Show the "Madjikarité" page
    madjikaritePage(req, res) {
        res.json({ page: 'page madjikarite' });
    },
    // Show the "Nos productrices" page
    producerPage(req, res) {
        res.json({ page: 'page productrices' });
    },
    // Show the "Processus de fabrication" page
    productionPage(req, res) {
        res.json({ page: 'page production' });
    },
    // Show the "Les bénéfices du beurre de karité" page
    benefitsPage(req, res) {
        res.json({ page: 'page bienfaits' });
    },
};

module.exports = aboutUsController;
