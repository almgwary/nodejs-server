const express = require('express');
const messageService = require('../services/message');
let router = express.Router();

router.get('/', messageService.getMessages);

router.get('/:id', messageService.getMessageById);

router.post('/', messageService.createMessage);

router.put('/:id', messageService.updateMessage);

router.delete('/:id', messageService.deleteMessage);

module.exports = router;