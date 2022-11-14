import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'



const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


test('Renders NavBar',()=>{



const mockedProps = {
setAccessToken: jest.fn(),
token:'access token'
}

    const component = render(<BrowserRouter> <NavBar {...mockedProps} ></NavBar> </BrowserRouter>)

    const homeButton = component.getByText('Home')
    fireEvent.click(homeButton)

    const crudButton =  component.getByText('Crud')
    fireEvent.click(crudButton)

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(2)

    
})
