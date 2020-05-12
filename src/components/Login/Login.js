import React, {Component} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import './Login.css';
let isLogged =false;
let isAdmin = false;
if(localStorage.getItem('token')!== null ){
    isLogged =true;
}
if(localStorage.getItem('user')==='admin'){
  isAdmin =true;
}
export default class extends Component{
  constructor(props){
    super(props);
    this.state ={
      userName:'',
      password:'',
      isLogged,
      isAdmin
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }
  handleChange(e){
   this.setState({[e.target.name]:e.target.value})
  }
  handleClick(e){
    e.preventDefault();
    Axios({
      method:'POST',
      url:'http://localhost:3000/sign-in',
      data:{
        userName:this.state.userName,
        password:this.state.password
      }
    }).then(rs=>{
      if(rs.data.code==='200'){
        localStorage.setItem('token',rs.data.account.token);
        localStorage.setItem('user',rs.data.account.userName);
        localStorage.setItem('studentID',rs.data.account.data.studentID);
        if(rs.data.account.userName==='admin'){
          this.setState({isLogged:true,isAdmin:true})
        }
        this.setState({isLogged:true});
      }
    })
   
  }
  render(){
    if(this.state.isLogged && this.state.isAdmin){
      return <Redirect to="/admin/students" />
    }else if(this.state.isLogged){
        return <Redirect to="/student/exams" />
    }else
    return(
      <div id = "container-login-f">
      <h2>ĐĂNG KÝ THI</h2>
      <div id="login-form">
        <form id = "login-form-child"> 
          <lable id = "user" htmlFor="userName">
            Username:
          </lable>
          <input type="text"name="userName"onChange={this.handleChange}/>
          <br/>
          <lable htmlFor="password">
            Password: 
          </lable>
          <input name="password" type="password" onChange={this.handleChange} />
          <br/>
          <button type="submit"onClick={this.handleClick}>Login</button>
        </form>
      </div>
      </div>
    ) 
  }
}
