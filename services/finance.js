const db = require('./db');


//statement services
const statement = async (req, res) => {
    const { UserRole } = req.body;
    try {
        // Check if the username is already taken
        if (UserRole == "Manager") {
            const [dailyresults] = await db.query('SELECT * FROM dailystatement');
            const [StatementResults] = await db.query('SELECT * FROM statement');
            const [salary] = await db.query('SELECT * FROM salary');
            res.status(200).json(dailyresults, StatementResults, salary);
        } else (res.status(500).json({ message: 'UserRole is not authorize' }));

    }
    catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

// Inventory servieces
const Inventory = async (req, res) => {
    const { UserRole } = req.body;
    try {
        // Check if the username is already taken
        if (UserRole == "Manager") {
            const [InventResult] = await db.query('SELECT * FROM Inventory');

            res.status(200).json(InventResult);
        } else (res.status(500).json({ message: 'UserRole is not authorize' }));

    }
    catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

// PONUMBER service
const PurchasingOrder = async (req, res) => {
    const { UserRole, PONumber } = req.body;
    try {
        if (UserRole == "Manager") {
            const PoResult = await db.query('SELECT * FROM pofinance WHERE PONo = ?', [PONumber]);
            if (PoResult) {
                res.status(200).json(PoResult);
            } else {
                res.status(500).json({ message: 'Invalid PONumber' });
            }
        } else {
            res.status(500).json({ message: 'UserRole is not authorize' });
        }
    }
    catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Invoice service
const Invoice = async (req, res) => {
    const { UserRole, InvoiceNumber } = req.body;
    try {
        if (UserRole == "Manager") {
            const InvoiceResult = await db.query('SELECT * FROM invoicefinance WHERE InvoiceNo = ?', [InvoiceNumber]);
            if (InvoiceResult) {
                res.status(200).json(InvoiceResult);
            } else {
                res.status(500).json({ message: 'Invalid InvoiceNumber' });
            }
        } else {
            res.status(500).json({ message: 'UserRole is not authorize' });
        }
    }
    catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// General Ledger
const Ledger = async (req, res) => {
    const { UserRole} = req.body;
    try {
        if (UserRole == "Manager") {
            const LedgerResult = await db.query('SELECT * FROM ledger');
            if (LedgerResult) {
                res.status(200).json(LedgerResult);
            } else {
                res.status(500).json({ message: 'Date not found' });
            }
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    catch (error) {
        console.error('Error executing databse query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Jornal 
const Journal = async (req, res) => {
    const { UserRole} = req.body;
    try {
        if (UserRole == "Manager") {
            const JournalResult = await db.query('SELECT * FROM generaljournal');
            if (JournalResult) {
                res.status(200).json(JournalResult);
            } else {
                res.status(500).json({ message: 'Date not found' });
            }
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    catch (error) {
        console.error('Error executing databse query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    statement,
    Inventory,
    PurchasingOrder,
    Invoice,
    Ledger,
    Journal
};