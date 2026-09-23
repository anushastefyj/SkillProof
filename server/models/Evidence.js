const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skill',
    required: true
  },
  type: {
    type: String,
    enum: ['project', 'quiz', 'github', 'coding_task'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  score: {
    type: Number // Score out of 100
  },
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('evidence', EvidenceSchema);
