import React from 'react'
import { useRef } from 'react';
import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
  const handleSubmit  = () => {
    axios.post("http://localhost:5000/auth", {username: userRef.current.value, password: passwordRef.current.value })
    .then(res => window.location.replace("/admin"))
  }

  return (
    <>
    <Link to="/admin/register">Register</Link>
    <div>Login</div>
    <form onSubmit={handleSubmit}>
        <input type = "text" ref={userRef}></input>
        <input type = "password" ref={passwordRef}></input>
        <button type = "submit"></button>
    </form>
    </>
  )
}

export default Login