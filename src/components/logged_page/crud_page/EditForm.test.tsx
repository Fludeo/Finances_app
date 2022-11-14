
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { RecordFormType } from '../../../types/types'
import EditRecordForm from './EditForm'
import { BrowserRouter } from 'react-router-dom'





test('Renders and submits NewRecordForm ',()=>{


const mockedProps = {
handleSubmit: jest.fn(),
UpdateForm: jest.fn(),
formData: {}as RecordFormType,
closeForm: jest.fn(),
type: 'income' as 'income'|'outgo'
}

    const component = render(<BrowserRouter><EditRecordForm {...mockedProps} ></EditRecordForm></BrowserRouter>)

    //Get concept Label
    component.getByText('Concept')


    const acceptButton =  component.getByText('Accept')

    fireEvent.click(acceptButton)

    expect(mockedProps.handleSubmit).toBeCalledTimes(1)

    const cancelButton =  component.getByText('Cancel')

    fireEvent.click(cancelButton)

    expect(mockedProps.closeForm).toBeCalledTimes(1)

})