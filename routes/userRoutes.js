const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const authJwt = require('../utils/auth-jwt')

router.route('/').post(userController.createUser)
router.route('/:email').get(authJwt, userController.getUserByEmail)
router.route('/login').post(userController.login)

module.exports = router
