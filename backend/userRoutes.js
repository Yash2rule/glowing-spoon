const express = require('express');
const router = express.Router();
const authUser = require('./userController.js');

router.post('/login',authUser);

module.exports = router;