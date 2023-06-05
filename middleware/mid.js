const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const jwtAuthMiddleware = (req, res, next) => {
    // Get the token from the request headers, query parameters, or cookies
    const token = req.headers.authorization || req.query.token || req.cookies.token;
  
    if (token) {
      try {
        // Verify and decode the token
        const decoded = jwt.verify(token, JWT_SECRET);
  
        // Attach the decoded token to the request object for further use
        req.user = decoded;

        // Call the next middleware or route handler
        if (requiredRole && decoded.UserRole !== requiredRole) {
            return res.status(403).json({ message: 'Access denied' });
          }
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
  
  module.exports = jwtAuthMiddleware;