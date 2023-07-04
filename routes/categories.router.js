const express = require('express');
const CategoriesService = require('../services/catergories.service')

// -- Service
const service = new CategoriesService();

// -- Router
const router = express.Router();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  const product = service.findOne( categoryId, productId);
  res.json(product)
});

module.exports = router;

