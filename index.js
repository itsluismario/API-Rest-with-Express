const express = require('express');
const app = express();
const port = 3000;

// app has always two params
app.get('/', (req, res) => {
  res.send('Hi, my server in express');
});


app.get('/users', (req, res) => {
  res.json(
    [
      {
        name: 'P1',
        price: 338
      },
      {
        name: 'P2',
        price: 223
      },
    ]
    )
});



app.get('/products', (req, res) => {
  res.json(
    [
      {
        name: 'P1',
        price: 338
      },
      {
        name: 'P2',
        price: 223
      },
    ]
    )
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
