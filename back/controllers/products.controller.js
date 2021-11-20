const { Router } = require('express');
const productsDatabase = require('../database/base-managment');

const router = new Router();

router.get('/', async(_request, response) => {
    const products = await productsDatabase.getAllCatalog();
    response.json(products);
});

module.exports = router;