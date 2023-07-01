const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    [
      {
        category: 'C1',
      },
      {
        category: 'C2',
      },
    ]

    )
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
    },
    )
});

module.exports = router;

