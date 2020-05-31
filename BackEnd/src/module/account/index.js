const mongoose = require('../../controller/connection');
const bcrypt = require('bcrypt');
const saltRound = 10;
const accountSchema = mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  dateOfBirth: String
});
const accounts = mongoose.model('account', accountSchema);

const CreateAccount = async (user) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(user.password, saltRound, async(err, crypt) => {
      const temp = {...user,password:crypt}
      accounts.create(temp, (err, result) => {
        if (err) {
          return reject(new Error('create user is error'))
        } else {
          if (result) {
            return resolve({
              status: '200',
              message: 'created users'
            })
          } else {
            return resolve({
              status: '400',
              message: 'can\'t created users'
            })
          }
        }
      })
    })

  })
}
const Login = async (account) => {
  let accountCheck =  await accounts.findOne({userName:account.userName});
  return new Promise((resolve,reject)=>{
      if(accountCheck){
          bcrypt.compare(account.password,accountCheck.password,(err,res)=>{
              if(res==true){
                  resolve({
                      status:'200',
                      message:'signed in',
                      account:accountCheck
                  })
              }else{
                  resolve({
                      status:'420',
                      message:'fail to login'
                  })
              }
          })
      }else{
          resolve({
              status:'400',
              message:'usename is not exist'
          })
      }
  })
  
}
module.exports = {
  CreateAccount,
  Login
}