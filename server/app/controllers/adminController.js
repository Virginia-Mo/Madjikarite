const adminDataMapper = require('../dataMappers/adminDataMapper');
const productDataMapper = require('../dataMappers/productDataMapper');
const NotFoundError = require('../helpers/notFoundError');
const UserInputError = require('../helpers/userInputError');

const adminController = {

    // Homepage back office
    async getProductsPage(req, res) {
        const products = await productDataMapper.getAllProduct();
        if (!products) {
            throw new NotFoundError('Aucun produit trouvé');
        }
        const newProducts = [];
        for (let i = 0, len = products.length; i < len; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            const picture = await productDataMapper.getAllPictures(products[i].id);
            const newProduct = products[i];
            newProduct.pictures = picture;
            newProducts.push(newProduct);
        }
        res.json(newProducts);
    },

    // get the create new product page
    async getCreateNewProductPage(req, res) {
        res.json({ page: 'page adminNewProductPage' });
    },

    // validate new produit
    async validateFormNewProduct(req, res) {
        if (!req.body.name || !req.body.short_description
            || !req.body.full_description || !req.body.ingredients
            || !req.body.packaging || !req.body.price || !req.body.weight
            || !req.body.category_id) {
            throw new UserInputError('Tous les champs ne sont pas remplis');
        }
        const product = await adminDataMapper.createNewProduct(req.body);
        if (!product) {
            throw new UserInputError('Le produit n\'a pas pu être créé');
        }
        // eslint-disable-next-line camelcase
        const { picture_url } = req.body;
        // eslint-disable-next-line camelcase
        const newPictureUrl = picture_url.split(',');
        for (let i = 0, len = newPictureUrl.length; i < len; i += 1) {
            const picture = {
                url: newPictureUrl[i],
                product_id: product.id,
            };
            // eslint-disable-next-line no-await-in-loop
            const newPicture = await adminDataMapper.addPictureToProduct(product.id, picture);
            if (!newPicture) {
                throw new UserInputError('La photo n\'a pas pu être ajoutée');
            }
        }
        // const picture = await adminDataMapper.addPictureToProduct(product.id, req.body);
        res.json({ message: 'Le produit a été créé' });
    },

    // get one product page
    async getOneProduct(req, res) {
        const product = await productDataMapper.getOneProduct(req.params.id);
        if (!product) {
            throw new NotFoundError('Le produit demandé n\'existe pas');
        }
        const newProducts = [];
        const pictures = await productDataMapper.getAllPictures(product.id);
        const newProduct = product;
        newProduct.pictures = pictures;
        newProducts.push(newProduct);
        res.json(newProducts);
    },

    // update product
    async updateProduct(req, res) {
        // eslint-disable-next-line camelcase
        const product_id = parseInt(req.params.id, 10);
        const oldData = await productDataMapper.getOneProduct(product_id);
        if (!oldData) {
            throw new NotFoundError('Le produit demandé n\'existe pas');
        }
        const newData = [];
        newData.push(product_id);
        // eslint-disable-next-line no-restricted-syntax
        for (const key in req.body) {
            if (req.body[key] === '') {
                newData.push(oldData[key]);
            } else {
                newData.push(req.body[key]);
            }
        }
        const updatedProduct = await adminDataMapper.updateProduct(newData);
        if (!updatedProduct) {
            throw new UserInputError('Le produit n\'a pas pu être mis à jour');
        }
        res.json(updatedProduct);
    },

    // delete product
    async deleteProduct(req, res) {
        await adminDataMapper.deleteProduct(req.params.id);
        // s'il a bien disparu de la BDD

        res.json({ message: 'Le produit a été supprimé' });
    },

    // get all the order page
    async viewListingOrder(req, res) {
        // get all the orders
        const orders = await adminDataMapper.getAllOrders();
        if (!orders) {
            throw new NotFoundError('Aucune commande trouvée');
        }
        let currentProducts = [];
        // loop on orders
        for (let i = 0; i < orders.length; i += 1) {
            // loop on cart
            for (let index = 0; index < orders[i].cart.length; index += 1) {
                // for each cart, parse the cart into JSOn to get the right format
                const products = JSON.parse(orders[i].cart[index]);
                // push the products into the currentProducts array
                currentProducts.push(products);
            }
            // delete the old cart format from the orders
            delete orders[i].cart;
            // add the new cart format to the orders
            orders[i].cart = currentProducts;
            // reset the currentProducts array for the next order
            currentProducts = [];
        }
        // orders.cart = newOrder;
        res.json(orders);
    },

    // get an order page
    async getAnOrderPage(req, res) {
        const orderId = parseInt(req.params.id, 10);
        const user = await adminDataMapper.getOneOrderUser(orderId);
        const order = await adminDataMapper.getOneOrderProducts(orderId);
        if (!order) {
            throw new NotFoundError('La commande n\'existe pas');
        }
        if (!user) {
            throw new NotFoundError('L\'utilisateur n\'existe pas');
        }
        const newOrder = [];
        for (let i = 0; i < order.cart.length; i += 1) {
            newOrder.push(JSON.parse(order.cart[i]));
        }
        delete order.cart;
        res.json({ user, cart: newOrder, order });
    },

    // update order
    updateOrder(req, res) {
        res.json({ page: 'La commande a été mise à jour' });
    },

    // delete order
    async deleteOrder(req, res) {
        const id = parseInt(req.params.id, 10);
        await adminDataMapper.deleteOrder(id);
        res.json({ message: 'La commande a été supprimée' });
    },
};

module.exports = adminController;
