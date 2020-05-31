import Axios from 'axios';
import url from './api'; 

async function createAccount(account){
  const url_create = url.account.create;
  const data = await Axios.post(url_create,account)
  return data
}
async function login(account){
  const url_login = url.account.login;
  const data = await Axios.post(url_login,account);
  return data;
}
export default {
  createAccount,
  login
}