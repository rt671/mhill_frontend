import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit  = () => {
        axios.post("http://localhost:5000/auth", {username, password})
        .then(res => window.location.replace("/admin/login"))
        .catch(err => console.log(err));
    }

  return (
    <>
    <div>Register</div>
    <form onSubmit={handleSubmit}>
        <input type = "text" onChange={e=> setUsername(e.target.value)}></input>
        <input type = "password" onChange={e=>setPassword(e.target.value)}></input>
        <button type = "submit"></button>
    </form>
    </>
  )
}

export default Register