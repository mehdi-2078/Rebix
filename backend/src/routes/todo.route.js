const {Router} = require('express')
const router = Router();

const {deleteTodo, editTodo, makeTodo, allTodos} = require('../controllers/todo.controller')

router.get('/allTodos', allTodos)
router.post('/makeTodo/', makeTodo)
router.put('/editTodo/', editTodo)
router.put('/deleteTodo/', deleteTodo)


module.exports = {
    todoRoutes: router
}