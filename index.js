const express = require('express');
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');

// app has always two params
app.get('/', (req, res) => {
  res.send('Hi, my server in express');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json(
      {
        limit,
        offset
      });
  } else {
    res.send('There is no params')
  }
});

app.get('/products', (req, res) => {
  const { size } = req.query;
  const products = [];

  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
    res.json(products);
});

app.get('/categories', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  console.log('I am a product filter');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
      {
        name: 'P1',
        price: 338,
        id,
      },
    )
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json(
      {
        name: 'P1',
        email: 'itsluismario@gmail.com',
        id,
      },
    )
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
    },
    )
});

// You must neve user console.log in production, only for dev
app.listen(port, () => {
  console.log('My port' + port);
});
