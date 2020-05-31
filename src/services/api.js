const  base_url= "http://localhost:3001";
export default  {
  account:{
    login:`${base_url}/user/login`,
    create:`${base_url}/user/create`,
  },
  post:{
    create:`${base_url}/post/create`,
    delete:`${base_url}/post/delete`,
    getAll:`${base_url}/post/all`,
    getById:`${base_url}/post/get/`,
  }
}