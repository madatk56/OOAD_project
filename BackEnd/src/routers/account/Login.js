const usersModule = require('../../module/account/index');
module.exports= async(req,res)=>{
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  usersModule.Login(user).then(async result=>{
    res.json(result);
  })
}
