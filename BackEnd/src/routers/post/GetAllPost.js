const PostModule = require('../../module/Post/index');

module.exports = (req, res) => {
  PostModule.GetAllPost()
    .then(result => {
     res.json({data:result})
    })
    .catch(err=>{
      res.json({data:err})
    })
}