const express = require('express');
const router = express.Router();
const authService = require('../services/auth.js');

// Register route
router.post('/register', authService.register);

// Login route
router.post('/login', authService.login);

module.exports = router;