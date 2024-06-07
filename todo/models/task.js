const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const todoAppSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

const Tasks = mongoose.model('Task', todoAppSchema);

module.exports = Tasks;