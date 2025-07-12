const router = require('express').Router();
const Question = require('../models/Question');

// Get all questions
router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

// Add question (admin only, simple)
router.post('/', async (req, res) => {
  const q = await Question.create(req.body);
  res.json(q);
});

module.exports = router;
