const db = require('./db');



// Operation Dashboard
const operationdashboard = async (req, res) => {
    try {
        // Check if the username is already taken
            const dailyresults = await db.query('SELECT * FROM dailykpi');
            res.status(200).json(dailyresults);
        }catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Manager Dashboard

const managerdashboard = async (req, res) => {
    try{
        const results = await db.query('SELECT * FROM managerkpi');
        res.status(200).json(results);
    }catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {operationdashboard,
    managerdashboard
};