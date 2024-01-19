/// <reference types = "cypress"/>  

it('Test 1', () => {
    cy.visit("http://localhost:8080/Instructor")
    cy.get("h1").contains('Instructor Management Pannel')
    cy.get(':nth-child(2) > :nth-child(5) > #exam').clear().type(0)
    cy.get(':nth-child(2) > :nth-child(7) > .update').click()
    cy.get(':nth-child(2) > .final')
})