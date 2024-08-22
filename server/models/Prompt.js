const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  analysis: { type: Object },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Prompt', promptSchema);