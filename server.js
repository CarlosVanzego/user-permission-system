const express = require('express'); // Import the Express.js module
const app = express(); // Create an instance of Express
const { ROLE, users } = require('./data'); // Import data and constants from a file
const { authUser, authRole } = require('./basicAuth'); // Import authentication middleware
const projectRouter = require('./routes/projects'); // Import project routes

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to set user information
app.use(setUser);

// Mount the project router at the '/projects' path
app.use('/projects', projectRouter);

// Route for the home page
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Route for the dashboard page with user authentication
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page');
});

// Route for the admin page with user authentication and role-based authorization
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page');
});

// Middleware function to set user information based on request body
function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find(user => user.id === userId);
  }
  next();
}

// Start the server on port 3000
app.listen(3000);