const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: { type: String, required: true },           // you could get from auth token
  answers: { type: Object, required: true },
  totalScore: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
