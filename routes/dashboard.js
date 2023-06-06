const express = require('express');
const router = express.Router();
const jwtmid = require('../middleware/mid.js');
const Dashboard = require('../services/dashboard.js')


router.get('/operator', Dashboard.operationdashboard);
router.get('/manager', Dashboard.managerdashboard);
module.exports = router;