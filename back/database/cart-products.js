const path = require('path');
const productsDatabase = require("./base-managment");
const {readJsonFile, writeJsonFile} = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), 'database', 'products', 'cart.json');

const cartProducts = {

    async getAllCart() {
        return await readJsonFile(FILE_PATH) || [];
    },

    async addProduct(product) {
        const products = await this.getAllCart();

        let findIndex = products.findIndex((thing) => thing.name.toLowerCase() === product.name.toLowerCase());

        if (findIndex === -1) {
            if (product.name.trim() && product.price && product.quantity) {
                products.push(product);
                await writeJsonFile(FILE_PATH, products);
                return products;
            } else {
                throw new Error("Empty fields.");
            }
        } else {
            product.action = "increase";
            return await this.changeQuantity(product);
        }
    },

    async deleteProduct(product) {
        let content = await this.getAllCart();
        let findIndex = content.findIndex((thing) => thing.name.toLowerCase() === product.name.toLowerCase());
        if (findIndex === -1) {
            throw new Error("This item is not in the cart.");
        }
        content.splice(findIndex, 1);
        await writeJsonFile(FILE_PATH, content);
        return content;

    },

    async changeQuantity(product) {
        let cart = await this.getAllCart();
        let findIndex = cart.findIndex((thing) => thing.name.toLowerCase() === product.name.toLowerCase());

        if (findIndex === -1) {
            throw new Error("This item is not in the cart.");
        }
        const catalog = await productsDatabase.getAllCatalog();
        const productPrice = catalog.find((thing) => thing.name.toLowerCase() === product.name.toLowerCase()).price;

        if (product.action === "increase") {
            cart[findIndex].quantity += 1;
        } else {
            cart[findIndex].quantity -= 1;
            if (cart[findIndex].quantity === 0) {
                return await this.deleteProduct(product);
            }
        }
        cart[findIndex].price = cart[findIndex].quantity * productPrice;
        await writeJsonFile(FILE_PATH, cart);
        return cart;
    }
};

module.exports = cartProducts;