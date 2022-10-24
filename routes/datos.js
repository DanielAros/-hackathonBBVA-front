const { Router } = require('express');
const path = require('path');

const { getDatos, downloadCSV } = require('../controllers/datos');

const router = Router();

router.get('/', getDatos);

router.get('/downloadCSV', downloadCSV);

module.exports = router;