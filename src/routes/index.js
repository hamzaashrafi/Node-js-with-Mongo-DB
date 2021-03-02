const express = require("express");
const router = express.Router();
const { addTodo, removeTodo, getTodo } = require('../services/todo');

router.get("/gettodo", getTodo);
router.post("/addtodo", addTodo);
router.post("/removetodo", removeTodo);

module.exports = router;
