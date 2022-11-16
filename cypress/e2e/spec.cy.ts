/* eslint-disable @typescript-eslint/no-unused-vars */
import FormatDate from "../../src/helper_functions/formatDate"


describe('e2e app testing', () => {

const newUser = {name:'leandro', email:'user@email.com', password:'qwerty1234'}


beforeEach(()=>{
  cy.request(`http://localhost:8080/reset`)
  cy.visit(`http://localhost:3000/Finances_app/`) 

  //Register user 
const signUpButton = cy.get('.login-page__signup-button')
  signUpButton.click()
  cy.get('.signup-form').within((_signupForm)=>{
    cy.get('[name=name]').type(newUser.name)
    cy.get('.signup-form__signup-button').click()
    cy.get('[name=email]').type(newUser.email)
    cy.get('.signup-form__signup-button').click()
    cy.get('[name=password]').type(newUser.password)
    cy.get('.signup-form__signup-button').click()
    cy.get('[name=repeat-password]').type(newUser.password)
    cy.get('.signup-form__signup-button').click()
  })
 
//Logs in created user
  cy.get('.login-form').within((_loginForm)=>{
    cy.get('[name=email]').type(newUser.email)
    cy.get('.login-form__login-button').click()
    cy.get('[name=password]').type(newUser.password)
    cy.get('.login-form__login-button').click()

})
})




it('Adds 2 new record from home page',()=>{
  cy.get('.balance__button').click()

  cy.get('.new-record-form').within((_newRecordForm)=>{
    cy.get('[name=concept]').type('new income')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=amount]').type('200')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=type-income]').check()
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=income-category]').select('Salary')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=date]').type(FormatDate(new Date()))
    cy.get('.new-record-form__accept-button').click()

})

cy.get('.balance__button').click()


cy.get('.new-record-form').within((_newRecordForm2)=>{
  cy.get('[name=concept]').type('new outgo')
  cy.get('[name=amount]').type('500')
  cy.get('[name=type-outgo]').check()
  cy.get('[name=outgo-category]').select('Services')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.new-record-form__accept-button').click()


})


})


it('Adds and filters 4 new record from crud page',()=>{
  cy.get('.links__text').last().click()

  cy.get('.table__new-button').first().click()


  cy.get('.edit-record-form').within((_editRecordForm)=>{
    cy.get('[name=concept]').type('new income 1')
    cy.get('.edit-record-form__accept-button').click()
    cy.get('[name=amount]').clear().type('2000')
    cy.get('.edit-record-form__accept-button').click()
    cy.get('[name=income-category]').select('Salary')
    cy.get('.edit-record-form__accept-button').click()
    cy.get('[name=date]').type(FormatDate(new Date()))
    cy.get('.edit-record-form__accept-button').click()

})

cy.get('.table__new-button').first().click()


cy.get('.edit-record-form').within((_editRecordForm)=>{
  cy.get('[name=concept]').type('new income 2')
  cy.get('[name=amount]').clear().type('1000')
  cy.get('[name=income-category]').select('Freelance job')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.edit-record-form__accept-button').click()

})

cy.get('.table__new-button').last().click()


cy.get('.edit-record-form').within((_editRecordForm)=>{
  cy.get('[name=concept]').type('new outgo 1')
  cy.get('[name=amount]').clear().type('1000')
  cy.get('[name=outgo-category]').select('Services')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.edit-record-form__accept-button').click()

})

cy.get('.table__new-button').last().click()


cy.get('.edit-record-form').within((_editRecordForm)=>{
  cy.get('[name=concept]').type('new outgo 2')
  cy.get('[name=amount]').clear().type('500')
  cy.get('[name=outgo-category]').select('Food')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.edit-record-form__accept-button').click()

})

cy.get('.crud-table__filter').first().select('Salary')

cy.get('.crud-table__filter').last().select('Food')

})



it('Adds 2 records in home page, edits 1 and deletes 1 from crud page',()=>{
  cy.get('.balance__button').click()

  cy.get('.new-record-form').within((_newRecordForm)=>{
    cy.get('[name=concept]').type('new income')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=amount]').type('200')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=type-income]').check()
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=income-category]').select('Salary')
    cy.get('.new-record-form__accept-button').click()
    cy.get('[name=date]').type(FormatDate(new Date()))
    cy.get('.new-record-form__accept-button').click()

})

cy.get('.balance__button').click()


cy.get('.new-record-form').within((_newRecordForm2)=>{
  cy.get('[name=concept]').type('new outgo')
  cy.get('[name=amount]').type('500')
  cy.get('[name=type-outgo]').check()
  cy.get('[name=outgo-category]').select('Services')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.new-record-form__accept-button').click()


})

cy.get('.links__text').last().click()

cy.get('.crud-table .crud-table__edit-icon').first().click()

cy.get('.edit-record-form').within((_editRecordForm)=>{
  cy.get('[name=concept]').clear().type('edited income')
  cy.get('[name=amount]').clear().type('2000')
  cy.get('[name=income-category]').select('Freelance job')
  cy.get('[name=date]').type(FormatDate(new Date()))
  cy.get('.edit-record-form__accept-button').click()
})

cy.get('.crud-table .crud-table__delete-icon').first().click()

cy.get('.delete-form .new-record-form__accept-button').click()


})



it('Logout',()=>{
  cy.get('.links__logout-button').click()

})

it('Login a non existent user',()=>{

//logout
  cy.get('.links__logout-button').click()

  cy.get('.login-form').within((_loginForm)=>{
    cy.get('[name=email]').type('nonexistent@email.com')
    cy.get('.login-form__login-button').click()
    cy.get('[name=password]').type('qwerty1234')
    cy.get('.login-form__login-button').click()
})

})

it('Register an existent user',()=>{
  
  //logout
    cy.get('.links__logout-button').click()
  
  //Register user 
const signUpButton = cy.get('.login-page__signup-button')
signUpButton.click()
cy.get('.signup-form').within((_signupForm)=>{
  cy.get('[name=name]').type(newUser.name)
  cy.get('[name=email]').type(newUser.email)
  cy.get('[name=password]').type(newUser.password)
  cy.get('[name=repeat-password]').type(newUser.password)
  cy.get('.signup-form__signup-button').click()
})
    
  
  })

})
export{}