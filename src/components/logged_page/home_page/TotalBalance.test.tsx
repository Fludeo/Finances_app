
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TotalBalance from './TotalBalance'







test('Renders TotalBalance ',()=>{


const mockedProps = {
buttonOnclick: jest.fn(),
token: 'access token'
}

    const component = render(<BrowserRouter><TotalBalance {...mockedProps} ></TotalBalance></BrowserRouter>)

    //Gets table header (mobile and desktop)
   component.getByText('Your balance')

   const newRecordButton =  component.getByText('New Record')

   fireEvent.click(newRecordButton)

   expect(mockedProps.buttonOnclick).toBeCalledTimes(1)

})