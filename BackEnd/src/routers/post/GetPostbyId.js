const PostModule = require('../../module/Post/index');

module.exports = (req, res) => {
  const postId = req.params.postId;
  PostModule.GetPostById(postId)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json(err)
    })
}