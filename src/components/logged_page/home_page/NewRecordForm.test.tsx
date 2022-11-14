
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import NewRecordForm from './NewRecordForm'
import { RecordFormType } from '../../../types/types'





test('Renders and submits NewRecordForm ',()=>{


const mockedProps = {
handleRecordSubmit: jest.fn(),
UpdateForm: jest.fn(),
formFields:{} as RecordFormType,
closeForm: jest.fn()
}

    const component = render(<NewRecordForm {...mockedProps} ></NewRecordForm>)

    //Get concept Label
    component.getByText('Concept')


    const acceptButton =  component.getByText('Accept')

    fireEvent.click(acceptButton)

    expect(mockedProps.handleRecordSubmit).toBeCalledTimes(1)

    const cancelButton =  component.getByText('Cancel')

    fireEvent.click(cancelButton)

    expect(mockedProps.closeForm).toBeCalledTimes(1)

})