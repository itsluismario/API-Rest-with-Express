const express = require('express');
const app = express();
const port = 3000;

// app has always two params
app.get('/', (req, res) => {
  res.send('Hi, my server in express');
});

app.get('/products', (req, res) => {
  res.json(
    {
      name: 'P1',
      price: 23238
    },
    )
});

app.get('/categories', (req, res) => {
  res.json(
    {
      category: 'C1',
    },
    )
});

// You must neve user console.log in production, only for dev
app.listen(port, () => {
  console.log('My port' + port);
});
