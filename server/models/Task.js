const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  task: String
});
module.exports = mongoose.model('Task', TaskSchema);
