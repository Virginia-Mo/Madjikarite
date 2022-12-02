const productController = {

    // Show all the product of the selected category
    getProductOfACategory(req, res) {
        res.json({ page: "page de tous les produts d'une catégorie" });
    },
    // Show the page of a single product
    getOneProduct(req, res) {
        res.json({ page: "page d'un produit" });
    },
};

module.exports = productController;
