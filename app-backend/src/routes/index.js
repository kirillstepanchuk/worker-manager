const express = require('express');

const worker = require('./worker');

const router = express();

router.use(worker);

module.exports = router;
