const express = require('express');
const router = express.Router();
const log4js = require("log4js");
const config = require("../config/log4js-config.js");
log4js.configure(config);

const logger = log4js.getLogger('SuccessExploitation');
logger.level = 'debug';

/* GET home page. */
router.get('/log', function(req, res, next) {
  logger.debug (req.query);
});

module.exports = router;