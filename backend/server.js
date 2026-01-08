const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donors');
const bloodRequestRoutes = require("./routes/bloodRequest");
const messageRoutes = require("./routes/messages");
const userRoutes = require('./routes/users');
const announcementRoutes = require('./routes/announcements');
const analyzeRoutes = require("./routes/analyze");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

// ✅ FIXED STATIC PATH
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


/* Routes */
app.use('/api/auth', authRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/requests', bloodRequestRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/analyze', analyzeRoutes);

/* MongoDB */
mongoose.connect('mongodb://127.0.0.1:27017/bloodbank', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(3000, () =>
  console.log('Server running at http://localhost:3000')
);
