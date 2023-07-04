const express = require('express');
const ProductsService = require('../services/products.service')

// -- Service
const service = new ProductsService();

// -- Router
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await service.find();
    res.json(products);
});

router.get('/filter', (req, res) => {
  console.log('I am a product filter');
});

router.get('/:id', async (req, res, next) => {
  try{
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
