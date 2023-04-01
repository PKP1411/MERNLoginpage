import React, {useState} from 'react'

import './register.css'




const Register = () => {
   

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "", 
  })



  return (
    <div className='container2'>
      <div className='vetimiddle2' >
        <h1 className='registern-h1'>Register</h1>
        <input type="email" name='name' value = {user.name} placeholder='Enter your Name' />
        <br />
        <input type="email" name='email' value={user.email} placeholder='Enter your Email' />
        <br />
        <input type='password' name='password' value={user.password} placeholder='Enter Password' ></input>
        <br />
        <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Confirm Password' ></input>
        <br />
        <button className='Btn' type='submit'>Register</button>
        <div>Or</div>
        <button className='Btn' type='submit'> Login</button>
      
       
      </div>
    </div>  
  )
}

export default Register