import '@testing-library/jest-dom';
import { render,fireEvent } from '@testing-library/react';
import Signup from './Signup'
import App from '../../App'

describe("Email Input",()=>{
    test("If email input is there or not",()=>{
        render(<App/>)
        const email = document.querySelector("#email")
        expect(email).toBeInTheDocument()
    })
    test("To check whether email has '@'&'.'",()=>{
        render(<App />)
        const email = document.querySelector("#email")
        expect(email.classList[0]).toBe("hidden")

    })
    test("If invalid email or not",()=>{
        render(<App />)
        const email = document.querySelector("#email")
        fireEvent.change(email, { target: { value: 'aa@gmail.com'}})
        expect(email.value).toMatch(/@/)
        expect(email.value).toMatch(/./)
    })
})

describe("Password Input",()=>{
    test.todo("If it is blank show red border and error msg")
    test.todo("It should test the strength component")
    test.todo("To test whether it has test icon or not")
})

describe("Confirm Password Input",()=>{
    test.todo("If it is blank show red border and error msg")
    test.todo("If the text is equal to password or not")
    test.todo("If not equal show red border and error message")
})

describe("Submit Button",()=>{
    test.todo("Should be disabled until all the inputs are correct")
    test.todo("onSubmit it should take us to OTP page")
})