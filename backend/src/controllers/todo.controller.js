const {todoModel} = require("../models/todo.model");


async function allTodos(req, res, next) {
    try {
        const todos = await todoModel.find({}, 'title description isDone');
        console.log(todos)
        // const result = todos.map
        res.send(todos)

    } catch (err) {
        res.status(404).send(err)
        next(err);
    }
}

async function makeTodo(req, res, next) {
    try {
        const {title, description, isDone} = req.body;
        const todo = await todoModel.create({
            title, description, isDone
        })
        res.send(todo)
    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

async function deleteTodo(req, res, next) {
    try {
        const todo = await todoModel.findByIdAndDelete(req.body.id)
        console.log({todo})
        res.send(todo)
    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

async function editTodo(req, res, next) {
    try {
        const {title, description, isDone} = req.body;
        const todo = await todoModel.findByIdAndUpdate(req.body.id,
            {title, description, isDone})
        console.log({todo})
        res.send(todo)
    } catch (err) {
        res.status(400).send(err)
        next(err);
    }
}

module.exports = {
    makeTodo, editTodo, allTodos, deleteTodo
}