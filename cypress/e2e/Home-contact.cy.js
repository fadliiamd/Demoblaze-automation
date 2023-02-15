/// <reference types="cypress" />

describe('Should try test Demoblaze web', () => {
    it('Should visit the website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url('').should('include','')
    });
    it('should check header links home and contact', () => {
        cy.get('.active > .nav-link').click() // Check home link
        cy.get(':nth-child(2) > .nav-link').click() // check contact link
        cy.get('#exampleModalLabel').should('have.text', 'New message') // Assertion
        cy.get('#recipient-email').type('fadliamada@gmail.com')
        cy.get('#recipient-email').should('have.attr', 'type', 'text') // Assertion
        cy.get('#recipient-name').type('Fadli Amada')
        cy.get('#recipient-name').should('have.attr', 'type', 'text') // Assertion
        cy.get('#message-text').type('Bismillah')
        cy.get('#message-text').should('have.attr','id','message-text') // Assertion
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
});