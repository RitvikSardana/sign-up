import React, { useState } from 'react'
import './Signup.css'

function Signup() {

    const [emailInput,setEmailInput] = useState("")


    const emailHandler = (e) =>{
        setEmailInput(e.target.value)
        console.log()
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
                    value = {emailInput} 
                    onChange={(e)=>emailHandler(e)}
                    required
                    className = {emailInput === ""? "hidden" : "active"} 
                >
                </input>
                <input 
                    type='password' 
                    id = "password" 
                    placeholder='Enter your Password' 
                    required
                >

                </input>
                <input type='password' id = "confirm_password" placeholder='Re-enter your Password' required></input>
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup
