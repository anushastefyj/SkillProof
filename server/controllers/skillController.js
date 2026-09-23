const { validationResult } = require('express-validator');
const Skill = require('../models/Skill');
const Evidence = require('../models/Evidence');

// @route   POST api/skills
// @desc    Add a new skill for the user
// @access  Private
exports.addSkill = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, level } = req.body;

  try {
    let skill = await Skill.findOne({ user: req.user.id, name });
    if (skill) {
      return res.status(400).json({ msg: 'Skill already exists' });
    }

    skill = new Skill({
      user: req.user.id,
      name,
      level: level || 'Beginner',
      progress: 0,
      evidenceCount: 0
    });

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET api/skills
// @desc    Get all skills for current user
// @access  Private
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user.id }).sort({ progress: -1 });
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
