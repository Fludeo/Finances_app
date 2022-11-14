
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RecordTable from './RecordTable'
import { BrowserRouter } from 'react-router-dom'







test('Renders RecordTable ',()=>{


const mockedProps = {
token: 'access token'
}

    const component = render(<BrowserRouter><RecordTable {...mockedProps} ></RecordTable></BrowserRouter>)

    //Gets table header (mobile and desktop)
   component.getAllByText('AMOUNT')



})