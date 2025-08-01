// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const passport = require('passport');
// const session = require('express-session');

// dotenv.config();
// require('./config/passport');

// const authRoutes = require('./routes/authRoutes');
// const questionRoutes = require('./routes/questionRoutes');

// const submitRoutes = require('./routes/submitRoutes');
// app.use('/api/submit', submitRoutes);

// const app = express();

// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(express.json());

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/questions', questionRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('DB connected');
//     app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
//   })
//   .catch(err => console.error(err));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

dotenv.config();
require('./config/passport');

const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const submitRoutes = require('./routes/submitRoutes');  // ✅ import *after* express, *before* using

const app = express();  // ✅ initialize here before using

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// ✅ use routes here
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/submit', submitRoutes);  // <== here, after app is initialized

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB connected');
    app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
