const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const Authen = (req, res, next) => {
    // Get the token from the request headers, query parameters, or cookies
    const token = req.headers.authorization || req.query.token || req.cookies.token;
  
    if (token) {
      try {
        // Verify and decode the token
        const decoded = jwt.verify(token, JWT_SECRET);
  
        // Attach the decoded token to the request object for further use
        req.user = decoded;

        // Call the next middleware or route handler
        
        next();
      } catch (error) {
        // Token verification failed
        return res.status(401).json({ message: 'Invalid token' });
      }
    } else {
      // Token not provided
      return res.status(401).json({ message: 'Token not found' });
    }
  };
  
  const ManagerAuthor = (req, res, next) =>{
    if (req.user.UserRole !== 'Manager') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next()
  };

  const OperatorAuthor = (req, res, next) => {
    if (req.user.UserRole !== 'Manager'|| req.user.UserRole !== 'Operator'){
      return res.status(403).json({ message: 'Access denied' });
    }
    next()
  };
  const OfficerAuthor = (req, res, next) => {
    if (req.user.UserRole !== 'Officer'|| req.user.UserRole !== 'Manager'){
      return res.status(403).json({ message: 'Access denied' });
    }
    next()
  };
  module.exports = {Authen,
    ManagerAuthor,
    OperatorAuthor,
    OfficerAuthor
  };