const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const Member = require('./model');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to DB
connectDB();

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Update Chart Values Route
app.post('/api/member', async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(req.body, 'req.body');

    const member = new Member({ name, email });

    await member.save();

    console.log({ message: 'Member input successfully', member });

    res.json({ message: 'Member input successfully', member });
  } catch (err) {
    console.log({ message: 'Server error', error: err.message });

    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
