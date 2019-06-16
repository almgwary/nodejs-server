const messageController = require('../controllers/message');

const express = require('express');
let router = express.Router();
router.use('/message', messageController);
module.exports = router;