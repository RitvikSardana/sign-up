import React, { useState } from 'react'
import './Signup.css'
import Strength from './Strength/Strength'

function Signup() {

    const [emailInput,setEmailInput] = useState("")
    const [passwordInput,setPasswordInput] = useState("")

    const emailHandler = (e) =>{
        setEmailInput(e.target.value)
        // console.log()
    }
    const passwordHandler = (e)=>{
        setPasswordInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        emailError()
    }
    const emailError = () =>{
        // emailInput==""?"Cant be blank":"a" 
        if(emailInput==""){
            return "Cant be blank"
        }
    }

    return (
        <div className = "signup" >
            <h2>Signup here</h2>
            <form action="submit" onSubmit={submitHandler}>
                <input 
                    data-testid="emailTest"
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
                    data-testid="passwordTest"
                    type='password' 
                    id = "password" 
                    placeholder='Enter your Password' 
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                >
                </input>
                <Strength password = {passwordInput}/>
                <input 
                    type='password' 
                    id = "confirm_password" 
                    placeholder='Re-enter your Password' 
                    required
                >
                </input>
                <button 
                    data-testid = 'buttonTest'
                    disabled
                >Signup</button>
            </form>
        </div>
    )
}

export default Signup
