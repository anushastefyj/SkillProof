const { validationResult } = require('express-validator');
const Evidence = require('../models/Evidence');
const Skill = require('../models/Skill');

// @route   POST api/evidence
// @desc    Add new evidence for a skill
// @access  Private
exports.addEvidence = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { skillId, type, title, description, url, score } = req.body;

  try {
    // Check if skill exists and belongs to user
    const skill = await Skill.findOne({ _id: skillId, user: req.user.id });
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    const newEvidence = new Evidence({
      user: req.user.id,
      skill: skillId,
      type,
      title,
      description,
      url,
      score,
      verified: true // Assume verified for prototype
    });

    const evidence = await newEvidence.save();

    // EVIDENCE ENGINE (Phase 8 implementation)
    // Update the skill progress based on the evidence type
    let progressBoost = 0;
    
    switch (type) {
      case 'project':
        progressBoost = 15;
        break;
      case 'coding_task':
        progressBoost = 10;
        break;
      case 'quiz':
        if (score && score >= 80) progressBoost = 20;
        else if (score && score >= 60) progressBoost = 10;
        break;
      case 'github':
        progressBoost = 5;
        break;
    }

    // Update skill Document
    skill.evidenceCount += 1;
    skill.progress += progressBoost;
    if (skill.progress > 100) skill.progress = 100; // Cap at 100
    
    // Update level based on progress
    if (skill.progress >= 90) skill.level = 'Expert';
    else if (skill.progress >= 75) skill.level = 'Advanced';
    else if (skill.progress >= 50) skill.level = 'Intermediate';
    else skill.level = 'Beginner';

    await skill.save();

    res.json({ evidence, skill });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET api/evidence/skill/:skillId
// @desc    Get all evidence for a specific skill
// @access  Private
exports.getEvidenceBySkill = async (req, res) => {
  try {
    const evidence = await Evidence.find({ 
      skill: req.params.skillId,
      user: req.user.id 
    }).sort({ createdAt: -1 });
    
    res.json(evidence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
