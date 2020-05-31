const PostModule = require('../../module/Post/index');

module.exports = (req,res)=>{
  const postId = req.body.postId;
  PostModule.DeleteAPost(postId)
    .then(rs=>{
      res.json(rs);
    })
    .catch(err=>{
      res.json(err)
    })
}