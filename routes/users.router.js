const express = require('express');

const UsersService = require('../services/users.service')

// -- Service
const service = new UsersService();

// -- Router
const router = express.Router();


router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user)
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await service.update(id, body);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);
  res.json(response);
});

module.exports = router;
