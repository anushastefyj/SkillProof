const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const skillController = require('../controllers/skillController');

// @route   POST api/skills
// @desc    Add a new skill for the user
// @access  Private
router.post('/', [auth, [
  check('name', 'Skill name is required').not().isEmpty()
]], skillController.addSkill);

// @route   GET api/skills
// @desc    Get all skills for current user
// @access  Private
router.get('/', auth, skillController.getSkills);

module.exports = router;
