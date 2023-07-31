const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
const passport = require("passport")

router.get('/posts/', postController.index)
// router.get('/posts/:id', postController.index)








module.exports = router
