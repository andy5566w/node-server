const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.route('/').post(userController.createUser)
router.route('/:email').get(userController.getUserByEmail)
router.route('/login').post(userController.login)

module.exports = router
