const express = require('express');
const router = express.Router();

const PostController = require('../../controllers/api/Post');

router.post('/', PostController.create);

router.get('/id/:_id', PostController.findOneByID);
router.get('/all', PostController.findAll);

router.patch('/like', PostController.addLike);

module.exports = router;
