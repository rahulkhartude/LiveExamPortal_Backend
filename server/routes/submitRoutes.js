const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// ✅ Protect route: middleware function
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

// POST /api/submit
// ensureAuthenticated,
router.post('/',  async (req, res) => {
  try {
    const { answers, totalScore } = req.body;

    const newSubmission = new Submission({
      userId:  "testUserId"   ,   // req.user._id,
      answers,
      totalScore
    });

    await newSubmission.save();

    res.json({ message: 'Submission saved successfully!' });
  } catch (err) {
    console.error('Submit failed', err);
    res.status(500).json({ message: 'Server error while saving submission' });
  }
});

module.exports = router;
