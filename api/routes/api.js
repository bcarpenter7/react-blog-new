const express = require('express')
const router = express.Router();
const postController = require('../controllers/posts')


router.get('/posts/', postController.index)
router.post('/posts/', postController.create);

router.get('/posts/:id', postController.show)
// router.get('/posts/:id', postController.index)


module.exports = router
