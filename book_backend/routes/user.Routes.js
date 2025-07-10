const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/user.controller');

// Add user (signup)
router.post('/register', registerUser);

// Add more routes like login, profile, etc., as needed

module.exports = router;
