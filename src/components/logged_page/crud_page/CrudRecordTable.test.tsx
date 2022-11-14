import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CrudRecordTable from './CrudRecordTable'

test('Renders both record tables', ()=>{

    const mockedProps = {
        token: 'access token',
        type: ''
    } as any

   

    mockedProps.type = 'income'
    const tableIncome = render(<BrowserRouter><CrudRecordTable {...mockedProps}></CrudRecordTable></BrowserRouter>)

    tableIncome.queryAllByText('CONCEPT')


  
    mockedProps.type = 'outgo'
    const tableOutgo = render(<BrowserRouter><CrudRecordTable {...mockedProps}></CrudRecordTable></BrowserRouter>)

    tableOutgo.queryAllByText('CONCEPT')

})