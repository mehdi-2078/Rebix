const {Router} = require('express')
const router = Router();

const {login, profile, register} = require('../controllers/auth.controller')

router.post('/login', login)
router.post('/register/', register)
router.post('/profile/', profile)

module.exports = {
    authRoutes: router
}