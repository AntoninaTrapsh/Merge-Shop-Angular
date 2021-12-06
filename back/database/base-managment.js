const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), 'database', 'products', 'products.json');

const productsDatabase = {

    async getAllCatalog() {
        return await readJsonFile(FILE_PATH) || [];
    },

    async searchProduct(searchValue) {
        let findList = [];
        const products = await this.getAllCatalog();
        for (let item of products) {
            if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
              findList.push(item);
            }
        }
        return findList;
    },

    async detailsProduct(detailsValue) {
        const products = await this.getAllCatalog();
        for (let item of products) {
           if (item.name === detailsValue) {
               return item;
           }
        }
        throw new Error("Not Found");
    }
};

module.exports = productsDatabase;