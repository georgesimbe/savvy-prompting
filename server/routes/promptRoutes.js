const express = require('express');
const router = express.Router();
const Prompt = require('../models/Prompt');
const auth = require('../middleware/auth');

// Create a new prompt
router.post('/', auth, async (req, res) => {
  try {
    const { content } = req.body;
    const prompt = new Prompt({ userId: req.user.id, content });
    await prompt.save();
    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ error: 'Error creating prompt' });
  }
});

// Get all prompts for a user
router.get('/', auth, async (req, res) => {
  try {
    const prompts = await Prompt.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching prompts' });
  }
});

// Update a prompt's analysis
router.put('/:id/analysis', auth, async (req, res) => {
  try {
    const { analysis } = req.body;
    const prompt = await Prompt.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { analysis },
      { new: true }
    );
    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }
    res.json(prompt);
  } catch (error) {
    res.status(500).json({ error: 'Error updating prompt analysis' });
  }
});

module.exports = router;