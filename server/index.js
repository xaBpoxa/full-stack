const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.post('/api/tasks', async (req, res) => {
  const newTask = new Task({ task: req.body.task });
  await newTask.save();
  res.json(newTask);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
