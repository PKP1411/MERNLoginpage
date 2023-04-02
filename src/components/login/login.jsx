import React, { useState } from 'react'
import './login.css'


 


const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(name,value)
    setUser({
      ...user,
      [name]: value    // only change value store in user
    })
  }



  return (
    <div className='container2'> 
      <div className='vetimiddle2' >

        {console.log("user", user)}
      <h1 className='login-h1'>Log in</h1>
        <input type="email" placeholder='Enter your Email' name='email' value={user.email} onChange={handleChange} />
      <br />
        <input type='password' placeholder='Enter your Password' name='password' value={user.password} onChange={handleChange}></input>
      <br />
      <button className='Btn' type='submit'> Login</button>
      <div>Or</div>
        <button className='Btn' type='submit'>Register</button>
      </div>
   </div>     

  )
}

export default Login