const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema
({
    title: {type: String},
    description: {type: String},
    isDone: {type: Boolean, default: false},
}, {
    timestamps: true,
})

const todoModel = mongoose.model('todo', todoSchema);
module.exports = {
    todoModel
}