import '@testing-library/jest-dom';
import { render,fireEvent,screen } from '@testing-library/react';
import Signup from './Signup'

describe("Email Input",()=>{
    test("If email input is there or not",()=>{
        render(<Signup/>)
        const email = screen.getByTestId('emailTest')
        expect(email).toBeInTheDocument()
    })
    test("If email has red border or not",()=>{
        render(<Signup />)
        const email = screen.getByTestId('emailTest')
        expect(email.classList[0]).toBe("hidden")

    })
    test("To check whether email has '@'&'.'",()=>{
        render(<Signup />)
        const email = screen.getByTestId('emailTest')
        fireEvent.change(email, { target: { value: 'aa@gmail.com'}})
        expect(email.value).toMatch(/@/)
        expect(email.value).toMatch(/./)
    })
})

describe("Password Input",()=>{
    test("If Password Input is there or not",()=>{
        render(<Signup />)
        const password = screen.getByTestId('passwordTest')
        expect(password).toBeInTheDocument()
    })
    test.todo("It should test the strength component")
    test.todo("To test whether it has test icon or not")
})

describe("Confirm Password Input",()=>{
    test.todo("If it is blank show red border and error msg")
    test.todo("If the text is equal to password or not")
    test.todo("If not equal show red border and error message")
})

describe("Submit Button",()=>{
    test("Should be disabled at first render",()=>{
        render(<Signup />)
        const button = screen.getByTestId('buttonTest')
        expect(button.disabled).toBe(true)
    });
    test.todo("Should be enabled at when all inputs are correct")
    test.todo("onSubmit it should take us to OTP page")
})