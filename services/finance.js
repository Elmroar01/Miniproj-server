const db = require('./db');


//statement services
const statement = async (req, res) => {
    const {UserRole} = req.body;
    try {
        // Check if the username is already taken
        if(UserRole == "Manager"){
            const [results] = await db.query('SELECT * FROM statement');
        
            res.status(200).json(results);
  } else(res.status(500).json({ message: 'UserRole is not authorize'}));

        }
catch (error) {
         console.error('Error executing database query:', error);
         res.status(500).json({ message: 'Internal server error' });
         }
        
    };

// Inventory servieces
const Inventory = async (req, res) => {
    const {UserRole} = req.body;
    try {
        // Check if the username is already taken
        if(UserRole == "Manager"){
            const [InventResult] = await db.query('SELECT * FROM Inventory');
        
            res.status(200).json(InventResult);
  } else(res.status(500).json({ message: 'UserRole is not authorize'}));

        }
catch (error) {
         console.error('Error executing database query:', error);
         res.status(500).json({ message: 'Internal server error' });
         }
        
    };

// PONUMBER service
const PurchasingOrder = async (req, res) => {
    const {UserRole , PONumber} = req.body;
    try{
        if(UserRole == "Manager"){
            const [PoResult] = await db.query('SELECT * FROM purchasingorder WHERE PONumber = ?', PONumber);
            if (PoResult) {
                res.status(200).json(PoResult);
            }else{
                res.status(500).json({ message: 'Invalid PONumber'});
            }
        }else{
            res.status(500).json({ message: 'UserRole is not authorize'});
        }
    }
    catch (error) {
            console.error('Error executing database query:', error);
            res.status(500).json({ message: 'Internal server error' });
            }
    };

// Invoice service
const Invoice = async (req, res) => {
    const {UserRole , InvoiceNumber} = req.body;
    try{
        if(UserRole == "Manager"){
            const [InvoiceResult] = await db.query('SELECT * FROM Invoice WHERE InvoiceNumber = ?', InvoiceNumber);
            if (InvoiceResult) {
                res.status(200).json(InvoiceResult);
            }else{
                res.status(500).json({ message: 'Invalid InvoiceNumber'});
            }
        }else{
            res.status(500).json({ message: 'UserRole is not authorize'});
        }
    }
    catch (error) {
            console.error('Error executing database query:', error);
            res.status(500).json({ message: 'Internal server error' });
            }
    };





    module.exports = {
    statement,
    Inventory,
    PurchasingOrder,
    Invoice
    };