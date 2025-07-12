// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   section: String, // e.g., 'React'
//   text: String,
//   options: [String],
//   correctAnswer: Number // index of correct option
// });
// module.exports = mongoose.model('Question', questionSchema);

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  section: String,           // e.g., 'Reasoning'
  text: String,              // question text
  options: [String],         // list of options
  type: {                    // single, multiple, truefalse
    type: String,
    enum: ['single', 'multiple', 'truefalse'],
    required: true
  },
  correctAnswer: mongoose.Schema.Types.Mixed
  // can be Number for single/truefalse, or [Number] for multiple
});

module.exports = mongoose.model('Question', questionSchema);
