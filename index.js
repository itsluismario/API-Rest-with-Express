const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

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

// -- Middleware must be declared after routing
// -- Consider which one goes first
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
