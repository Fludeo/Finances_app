
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import CrudPage from './CrudPage'
import { BrowserRouter } from 'react-router-dom'



test('Renders crud page',()=>{
const mockedProps ={
    token: 'access token'
}

    const componet = render(<BrowserRouter><CrudPage {...mockedProps}></CrudPage></BrowserRouter>)

    componet.getByText('New income')
    componet.getByText('New outgo')

})