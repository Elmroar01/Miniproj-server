const express = require('express');
const router = express.Router();
const financeservice = require('../services/finance.js');

// Monthly income statement service
router.post('/Income-statement', financeservice.statement);
router.post('/Inventory',financeservice.Inventory);
router.post('/PurchasingOrder',financeservice.PurchasingOrder);
router.post('/GeneralLedger', financeservice.Ledger);
router.post('/GeneralJournal', financeservice.Journal);
router.post('/Invoice', financeservice.Invoice);
module.exports = router;