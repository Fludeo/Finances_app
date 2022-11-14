
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import SignupForm from './SignupForm'
import { SignFormType } from '../../types/types'




test('Render, submit and close SignupForm ',()=>{


const mockedProps = {
handleSignup: jest.fn(),
UpdateForm: jest.fn(),
closeSignup: jest.fn(),
formFields:{} as SignFormType
}

    const component = render(<SignupForm {...mockedProps} ></SignupForm>)

    //Get email Label
    component.getByText('Email')


    const signupButton =  component.getByText('Sign Up')

    fireEvent.click(signupButton)

    expect(mockedProps.handleSignup).toBeCalledTimes(1)

    const closeButton =  component.getByText('Cancel')

    fireEvent.click(closeButton)

    expect(mockedProps.closeSignup).toBeCalledTimes(1)

})