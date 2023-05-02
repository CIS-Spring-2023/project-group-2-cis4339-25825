const express = require('express');
const router = express.Router();

// Retrieve the value of the ORG environment variable
const org = process.env.ORG;

// Importing data model schemas
const { users } = require('../models/models');

// Register a new user
router.post('/register', function(req, res) {
  // Create a new user object using the provided username, role, and org
  var new_user = new users({
    username: req.body.username,
    role: req.body.role,
    org: org
  });

  // Generate a password hash and assign it to the new user
  new_user.password = new_user.generateHash(req.body.password);

  // Save the new user to the database
  new_user.save();

  // Send a response indicating successful registration
  res.send('Registered');
});

// User login
router.post('/login', function(req, res) {
  // Find a user in the database with the provided username and org
  users.findOne({username: req.body.username, org: org}, function(err, user) {
    // If the user is not found
    if (!user) {
      res.send('Failed');
    }
    // If the password is invalid for the given username
    else if (!user.validPassword(req.body.password)) {
      res.send('Failed');
    } else {
      // If the login is successful, send a response with success message and user role
      res.send({
        message: 'Success',
        role: user.role
      });
    }
  });
});

// Export the router to be used by other modules
module.exports = router;
