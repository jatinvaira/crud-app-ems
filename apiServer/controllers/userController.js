// userController.js

const User = require('../models/User');

// Controller function to fetch user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

// Controller function to update user by ID
const updateUserById = async (userId, newData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user by ID');
  }
};

// Controller function to delete user by ID
const deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user by ID');
  }
};

module.exports = { getUserById, updateUserById, deleteUserById };
