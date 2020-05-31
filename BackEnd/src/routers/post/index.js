const router = require('express').Router();
const directory = require('../../config/Api');

const GetAllPost = require('./GetAllPost');
const GetAPost = require('./GetPostbyId');
const CreatePost = require('./CreatePost');
const DeletePost = require('./DeletePost');

router.get(directory.Post.getAll,GetAllPost)
router.get(directory.Post.getPost,GetAPost);
router.post(directory.Post.create,CreatePost);
router.post(directory.Post.delete,DeletePost)
module.exports = router;