const mongoose = require('mongoose');

const todoAppSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const task_history = mongoose.model('TaskHistory', todoAppSchema);

module.exports = task_history;