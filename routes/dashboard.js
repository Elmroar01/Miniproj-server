const express = require('express');
const router = express.Router();
const jwtmid = require('../middleware/mid.js');
const Dashboard = require('../services/dashboard.js')


router.post('/operator',jwtmid.Authen,jwtmid.OperatorAuthor, Dashboard.operationdashboard);
router.get('/manager', jwtmid.Authen,jwtmid.ManagerAuthor,Dashboard.managerdashboard);
module.exports = router;