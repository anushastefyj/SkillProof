const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'recruiter'],
    default: 'student'
  },
  title: {
    type: String
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  experienceYears: {
    type: Number,
    default: 0
  },
  githubUsername: {
    type: String
  },
  website: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
