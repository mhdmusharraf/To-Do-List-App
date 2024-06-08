const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskHistorySchema = new Schema({
    title: String,
    category: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Task_History', taskHistorySchema);
