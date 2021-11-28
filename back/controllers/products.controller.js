const { Router } = require('express');
const productsDatabase = require('../database/base-managment');

const router = new Router();

router.get('/', async(_request, response) => {
    const products = await productsDatabase.getAllCatalog();
    response.json(products);
});

router.get('/catalog', async (request, response) => {
    const searchValue = decodeURI(request.query.search);
    const products = await productsDatabase.searchProduct(searchValue);
    response.json(products);
});

router.get('/catalog/product', async (request, response) => {
    const detailsValue = decodeURI(request.query.item);
    const product = await productsDatabase.detailsProduct(detailsValue);
    response.json(product);
});

module.exports = router;