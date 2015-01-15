'use strict';

var router = require('express').Router();
var apiHandlers = require('./api.handlers');

/*
 * Set homepage routes
 */
router.get('/', apiHandlers.getRoot);
router.post('/generate', apiHandlers.generate);
router.post('/parse', apiHandlers.parse);

module.exports = router;