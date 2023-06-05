const db = require('./db');



// Operation Dashboard
const operatoiondashboard = async (req, res) => {
    const { Date } = req.body;
    try {
        // Check if the username is already taken
            const [dailyresults] = await db.query('SELECT * FROM dailykpi');
            res.status(200).json(dailyresults);
        }catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
};

