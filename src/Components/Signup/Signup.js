import React, { useState } from 'react'
import './Signup.css'

function Signup() {

    const [email,setEmail] = useState("")


    const emailHandler = (e) =>{
        setEmail(e.target.value)
        // email.
    }

    const submitHandler = (e) =>{
        e.preventDefault()
    }
    return (
        <div className = "signup" >
            <h2>Signup here</h2>
            <form action="submit" onSubmit={submitHandler}>
                <input 
                type='email' 
                id = "email" 
                placeholder='Enter your email' 
                value = {email} 
                onChange={(e)=>emailHandler(e)}
                required 
                >
                </input>
                <input type='password' id = "password" placeholder='Enter your Password' required></input>
                <input type='password' id = "confirm_password" placeholder='Enter your Password' required></input>
                <button>Signup</button>

            </form>
        </div>
    )
}

export default Signup
