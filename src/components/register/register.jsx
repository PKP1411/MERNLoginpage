import React, {useState} from 'react'
import axios from 'axios'
import './register.css'




const Register = () => {
   

  const [user, setUser] = useState({
    name: "",
    email: "",
    phonenum: "", 
    city:"", 
    password: "",
    reEnterPassword: "", 
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(name,value)
    setUser({
      ...user,
      [name] : value    // only change value store in user
    })
  }

  const register = () => {
    const { name, email, password } = user
    axios.post("http://localhost:9002/register")
  }



  return (
    <div className='container2'>
      <div className='vetimiddle2' >
        {/* {console.log("user", user)} */}
        <h1 className='registern-h1'>Register</h1>
        <input type="email" name='name' value = {user.name} placeholder='Enter your Name' onChange={handleChange} />
        <br />
        <input type="email" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
        <br />
        <input type="tel" name='phonenumber' value={user.tel} placeholder='Enter your Phone Number' onChange={handleChange} />
        <br />
        <input type="text" name='city' value={user.text} placeholder='Enter your City Name' onChange={handleChange} />
        <br />

        <input type='password' name='password' value={user.password} placeholder='Enter Password' onChange={handleChange} ></input>
        <br />
        <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Confirm Password' onChange={handleChange} ></input>
        <br />
        <button className='Btn' type='submit' onClick={register}>Register</button>
        <div>Or</div>
        <button className='Btn' type='submit'> Login</button>
      
       
      </div>
    </div>  
  )
}

export default Register