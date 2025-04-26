// routes/admin.js
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const checkRole = require('../middleware/roles');

router.use(authenticate);
router.use(checkRole(['admin']));

router.get('/users', (req, res) => {
  // Return all users
});