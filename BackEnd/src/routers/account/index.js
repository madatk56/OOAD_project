const router = require('express').Router();
const directory = require('../../config/Api');
const CreateAccount = require('./CreateAccount');
const Login  = require('./Login');
router.post(directory.Account.Create,CreateAccount);
router.post(directory.Account.Login,Login);
module.exports = router;