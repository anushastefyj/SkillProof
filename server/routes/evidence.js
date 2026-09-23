const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const evidenceController = require('../controllers/evidenceController');

// @route   POST api/evidence
// @desc    Add new evidence for a skill
// @access  Private
router.post('/', [auth, [
  check('skillId', 'Skill ID is required').not().isEmpty(),
  check('type', 'Type is required').not().isEmpty(),
  check('title', 'Title is required').not().isEmpty()
]], evidenceController.addEvidence);

// @route   GET api/evidence/skill/:skillId
// @desc    Get all evidence for a specific skill
// @access  Private
router.get('/skill/:skillId', auth, evidenceController.getEvidenceBySkill);

module.exports = router;
