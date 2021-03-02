const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        unique: true
    }
});

const todo = mongoose.model("Todo", todoSchema);
module.exports = todo;