const express = require('express');
const CategoriesService = require('../services/categories.service')

// -- Service
const service = new CategoriesService();

// -- Router
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:categoryId/products/:productId', async (req, res, next) => {
  try {
    const { categoryId, productId } = req.params;
    const product = await service.findOne( categoryId, productId);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);
    res.json(category);
  } catch (error) {
    next(error);
  }
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

