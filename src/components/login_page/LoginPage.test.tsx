
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom'





test('Renders LoginPage ',()=>{

const mockedProps = {
    setAccessToken: jest.fn(),
    token: 'access token'
}


    const component = render(<BrowserRouter basename={process.env.PUBLIC_URL}> <LoginPage {...mockedProps} ></LoginPage></BrowserRouter>)

    //Gets Header
    component.getByText('Alkemy')
})


