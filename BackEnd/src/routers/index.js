const directory = require('../config/Api');
const HandleLogin = require('./account/index');
const HandlePost = require('./post/index');
module.exports = (app)=>{
  app.use(directory.ROOT.Account,HandleLogin);
  app.use(directory.ROOT.Post,HandlePost);
}