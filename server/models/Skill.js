const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Beginner'
  },
  evidenceCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('skill', SkillSchema);
