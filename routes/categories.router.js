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

router.get('/:categoryId/products/:productId', async (req, res) => {
  const { categoryId, productId } = req.params;
  const product = await service.findOne( categoryId, productId);
  res.json(product)
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory)
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = await service.update(id, body);
  res.json(category);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);
  res.json(response);
});

module.exports = router;

