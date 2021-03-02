const todo = require("../schema/todo");


const addTodo = async (req, res) => {
    try {
        if (req.body.todo) {
            const addTodo = await todo.create(req.body);
            res.json(addTodo);
        } else {
            res.json({ code: 021, message: "required Fileds are missing" });
        }
    } catch (error) {
        console.log(error);
        res.json({ code: 01, message: error.message, reason: error.reason });
    }
};
const removeTodo = async (req, res) => {
    try {
        if (req.body._id) {
            const removeRemove = await todo.findOneAndRemove(req.body);
            res.json({ message: "Successfully remove", todo: removeRemove });
        } else {
            res.json({ code: 021, message: "required Fileds are missing" });
        }

    } catch (error) {
        console.log(error);
        res.json({ code: 01, message: error.message, reason: error.reason });
    }
};
const getTodo = async (req, res) => {
    try {
        const getTodo = await todo.find();
        res.json(getTodo);
    } catch (error) {
        res.json({ code: 01, message: error.message, reason: error.reason });
    }
};

module.exports = {
    addTodo,
    removeTodo,
    getTodo
};