const { Router } = require('express');
const cartProducts = require('../database/cart-products');

const router = new Router();

router.get('/', async (request, response) => {
    const cartContain = await cartProducts.getAllCart();
    response.json(cartContain);
});

router.post('/', async (request, response) => {
    try {
        const cartContain = await cartProducts.addProduct(request.body);
        response
            .status(201)
            .json(cartContain);
    } catch (e) {
        response.status(400).send("Unable to add");
    }
});

router.delete('/', async (request, response) => {
    try {
        const result = await cartProducts.deleteProduct(request.body);
        response
            .status(200)
            .json(result);
    } catch(e) {
        response.status(404).send("Unable to delete");
    }

});

router.patch('/', async (request, response) => {
    try {
        const result = await cartProducts.changeQuantity(request.body);
        response.json(result);
    } catch (e) {
        response.status(404).send("Unable to change");
    }
});

module.exports = router;