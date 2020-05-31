const AccountModule = require('../../module/account/index');
const CreateAccount= (req,res)=>{
  /* const user = {
    username : 'datdt',
    password : '1234',
    fullname:' String',
    dateOfBirth:' String'
  } */
  const user = req.body;
  AccountModule.CreateAccount(user).then(rs=>{
    res.json({
      message:rs
    })
  })
};
module.exports = CreateAccount;

