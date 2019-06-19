const userController = require('../controllers/user');

const express = require('express');
let router = express.Router();
router.use('/user', userController);
module.exports = router;