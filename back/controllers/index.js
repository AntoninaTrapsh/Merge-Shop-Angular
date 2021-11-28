const { Router } = require('express');
const productsController = require('./products.controller');
const cartController = require('./cart.controller');

const router = new Router();

router.use('/api', productsController);
router.use('/api/cart', cartController);

module.exports = router;