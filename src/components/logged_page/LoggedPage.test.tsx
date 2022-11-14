
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LoggedPage from './LoggedPage'
import { BrowserRouter } from 'react-router-dom'




test('Renders LoggedPage',()=>{



const mockedProps = {
setAccessToken: jest.fn(),
token:'access token'
}

    const component = render(<BrowserRouter><LoggedPage {...mockedProps} ></LoggedPage></BrowserRouter>)

    component.getByText('Home')
    component.getByText('Crud')
    
})


