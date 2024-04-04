// Middleware function to authenticate user
function authUser(req, res, next) {
  // Check if user is not authenticated
  if (req.user == null) {
    res.status(403); // Set status code to 403 (Forbidden)
    return res.send('You need to sign in'); // Send response indicating user needs to sign in
  }
  next(); // Call next middleware function
}

// Middleware function to authorize based on user role
function authRole(role) {
  return (req, res, next) => {
    // Check if user role does not match required role
    if (req.user.role !== role) {
      res.status(401); // Set status code to 401 (Unauthorized)
      return res.send('Not allowed'); // Send response indicating user is not allowed
    }
    next(); // Call next middleware function
  };
}

// Export authentication middleware functions
module.exports = {
  authUser,
  authRole
};