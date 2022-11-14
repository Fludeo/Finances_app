
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Modal from './Modal'




test('Renders modal content',()=>{

// Creating html element for react portal node.
const htmlDiv =    window.document.createElement('div')

htmlDiv.id = 'modal'

 window.document.body.appendChild(htmlDiv)

    const component = render(<Modal trigger={true}><h1>Hola</h1></Modal>)

    component.getByText('Hola')
})


test('Closed modal',()=>{


    
        const component = render(<Modal trigger={false}><h1>closed modal</h1></Modal>)
    
        expect(component.queryByText('closed modal')).toBeNull()
    })
    

    

