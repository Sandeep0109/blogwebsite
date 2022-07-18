import { Link } from 'react-router-dom'

import React from 'react'
import "./Login.css"

 const Login = () => {
  return (
    <div className="login">
     <form className="loginForm">
      
     <label >Usename</label>
      <input type="text" className="loginInput" placeholder="Enter your username" />


      <label >Email</label>
      <input type="text" className="loginInput" placeholder="Enter your email" />
       
      <label >Password</label>
      <input type="password"  className="loginInput" placeholder="Enter your password" />
      
       <button className="loginButton">Register</button>
     </form>

      <button className="loginRegisterButton">Login</button>
      <Link to="/register">Register</Link>
    </div>
  )
}
export default Login;
