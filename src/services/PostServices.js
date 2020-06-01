import Axios from 'axios';
import url from './api';

async function getAll() {
  const url_getAll = url.post.getAll;
  const data = await Axios.get(url_getAll);
  return data;
}
/*  */
async function getById(id) {
  const url_getById = `${url.post.getById}${id}`
  const data = await Axios.get(url_getById);
  return data
}
/*  */
async function createPost(post) {
  const url_create = url.post.create;
  const data = await Axios.post(url_create, post)
  return data
}
/*  */
async function deletePost(data) {
  const url_delete = `${url.post.delete}`
  const result = await Axios.post(url_delete, data)
  return result
}
export default {
  getAll,
  deletePost,
  createPost,
  getById
}