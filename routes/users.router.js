const express = require('express');

const UsersService = require('../services/users.service')

// -- Service
const service = new UsersService();

// -- Router
const router = express.Router();


router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user)
});

module.exports = router;
