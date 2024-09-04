const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  dateOfJoining: String,
  title: String,
  department: String,
  employeeType: String,
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
