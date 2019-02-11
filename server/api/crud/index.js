const express = require('express');
const router = express.Router();

const controller = require('./crud.controller');

router.get('/', controller.saveView);
router.get('/file/:key', controller.saveFile);


module.exports = router;