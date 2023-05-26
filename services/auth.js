const db = require('./db');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

// Register service implementation
const register = async (req, res) => {
  const { UserName, Password, UserRole, FirstName, LastName, Email } = req.body;
  const UserID = uuid.v4();
  try {
    // Check if the username is already taken
    const [results] = await db.query('SELECT * FROM user_data WHERE UserName = ?', [UserName]);

    if (results) {
      res.status(400).json({ message: 'Username already taken' });
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(Password, 10);

      // Insert the new user into the database
      await db.query('INSERT INTO user_data (UserID, UserName, Password, UserRole, FirstName, LastName, Email) VALUES (?, ?, ?, ?, ?, ?, ?)', [UserID, UserName, hashedPassword, UserRole, FirstName, LastName, Email]);

      res.status(201).json({ message: 'Registration successful' });
    }
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login service implementation
const login = async (req, res) => {
  const { UserName, Password } = req.body;

  try {
    // Retrieve the user's information from the database based on the provided username
    const [results] = await db.query('SELECT * FROM user_data WHERE UserName = ?', [UserName]);

    // Check if the user exists
    if (results) {
      const user = results.Password;
      // Compare the stored password with the provided password using bcrypt
      const passwordMatch = await bcrypt.compare(Password, user);

      if (passwordMatch) {
        // Passwords match, authentication successful
        res.status(200).json({ message: 'Authentication successful' });
      } else {
        // Passwords do not match
        res.status(401).json({ message: "Invalid credentials: Password doesn't match" });
      }
    } else {
      // User not found
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  register,
  login
};


// const register = (req, res) => {
//   const { UserName, Password, UserRole, FirstName, LastName, Email } = req.body;
//   const UserID = uuid.v4();
//   // Check if the username is already taken
  
//   db.query(`SELECT * FROM user_data WHERE UserName = '${UserName}'`,(err, results) => {
//     if (err) {
//       console.error('Error querying database:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     } else {
//       // If the username is already taken, return an error
//       if (results.length > 0) {
//         res.status(400).json({ message: 'Username already taken' });
//       } else {
//         // Hash the password using bcrypt
//         bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
//           if (hashErr) {
//             console.error('Error hashing password:', hashErr);
//             res.status(500).json({ message: 'Internal server error' });
//           } else {
//             // Insert the new user into the database
//             const sql = 'INSERT INTO user_data (UserID, UserName, Password, UserRole, FirstName, LastName, Email) VALUES (?, ?, ?, ?, ?, ?, ?)';
//             const values = [UserID, UserName, hashedPassword, UserRole, FirstName, LastName, Email];
        
//             db.query(sql, values, (insertErr) => {
//               if (insertErr) {
//                 console.error('Error inserting user into database:', insertErr);
//                 res.status(500).json({ message: 'Internal server error' });
//               } else {
//                 res.status(201).json({ message: 'Registration successful' });
//               }
//             });
//           }
//         });
//       }
//     }
//   });
// };
