const mongoose = require('../../controller/connection');

const postSchema = mongoose.Schema({
  companyName: String,
  address: String,
  requirement: String,
  safary: String,
})
const posts = mongoose.model('posts', postSchema);
/* module create a job post */
const CreatePost = async (post) => {
  return await posts.create(post)
  /* posts.create(post, (err, result) => {
   return new Promise((resolve,reject)=>{
    if (err) {
      return reject(new Error('create post is error'))
    } else {
      if (result) {
        return resolve({
          status: '200',
          message: 'created post'
        })
      } else {
        return resolve({
          status: '400',
          message: 'can\'t created post'
        })
      }
    }
   })
  }); */
}
/* module get all job post */
const GetAllPost = async() => {
  const post =await posts.find({});
  return(post);
}
/* module get job post by postId */
const GetPostById = async(postId)=>{
  return(await posts.find({_id:postId}))
}
/* module delete a post use postId */
const DeleteAPost = async(postId)=>{
   return await posts.deleteOne({_id:postId});
}
module.exports = {
  CreatePost,
  GetAllPost,
  GetPostById,
  DeleteAPost
}