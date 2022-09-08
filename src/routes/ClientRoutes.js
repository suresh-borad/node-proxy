const express = require('express');

const router = express.Router();
const ClientAction = require('../actions/ClientAction');
const validateBody = require('../helpers/validate-body');

router.post('/generate-token', validateBody('generateToken'), ClientAction.generateToken);

module.exports = router;
