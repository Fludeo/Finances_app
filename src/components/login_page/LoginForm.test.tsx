
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm'
import { LoginFormType } from '../../types/types'




test('Renders and submit LoginForm ',()=>{


const mockedProps = {
handleLogin: jest.fn(),
UpdateForm: jest.fn(),
formFields:{} as LoginFormType
}

    const component = render(<LoginForm {...mockedProps} ></LoginForm>)

    //Get email Label
    component.getByText('Email')


    const loginButton =  component.getByText('Log in')

    fireEvent.click(loginButton)

    expect(mockedProps.handleLogin).toBeCalledTimes(1)

})



