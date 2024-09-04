const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { getUserById, updateUserById, deleteUserById } = require('../controllers/userController');

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user by ID
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const newData = req.body;
  try {
    const updatedUser = await updateUserById(userId, newData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await deleteUserById(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
