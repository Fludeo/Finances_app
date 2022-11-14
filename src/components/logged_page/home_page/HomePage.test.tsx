
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'




test('Renders HomePage',()=>{



const mockedProps = {
token:'access token'
}

    const component = render(<BrowserRouter><HomePage {...mockedProps} ></HomePage></BrowserRouter>)

    component.getByText('Your balance')
    
})
