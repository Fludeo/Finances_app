
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import ConfirmDeleteForm from './ConfirmDeleteForm'
import { RecordFormType } from '../../../types/types'




test('Renders ConfirmDeleteForm component',()=>{

   const mockedProps = {
handleDelete: jest.fn(),
close:jest.fn(),
formData: {} as RecordFormType
    }

    mockedProps.formData.date = new Date()
    
    const component =  render(<ConfirmDeleteForm {...mockedProps}></ConfirmDeleteForm>)


    component.getByText('Confirm delete')
   
 
    const acceptButton =  component.getByText('Accept')

    fireEvent.click(acceptButton)

    expect(mockedProps.handleDelete).toBeCalledTimes(1)

    const cancelButton =  component.getByText('Cancel')

    fireEvent.click(cancelButton)

    expect(mockedProps.close).toBeCalledTimes(1)

})

