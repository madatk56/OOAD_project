const PostModule = require('../../module/Post/index');
const CreatePost= (req,res)=>{
  /* const user = {
    username : 'datdt',
    password : '1234',
    fullname:' String',
    dateOfBirth:' String'
  } */
  const post = req.body;
  PostModule.CreatePost(post).then(rs=>{
    res.json({
      message:rs
    })
  })
};
module.exports = CreatePost;

