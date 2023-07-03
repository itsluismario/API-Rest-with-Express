const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

// middleware to enable to send json data
app.use(express.json());

// app has always two params
app.get('/', (req, res) => {
  res.send('Hi, my server in express');
});

// You must neve user console.log in production, only for dev
app.listen(port, () => {
  console.log('My port' + port);
});

routerApi(app);
