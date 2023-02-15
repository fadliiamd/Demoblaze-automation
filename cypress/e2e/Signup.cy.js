/// <reference types="cypress" />

describe('Should try test Demoblaze web', () => {
    it('Should visit the website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url('').should('include','')
    });
    it('Should check sign up and try it', () => {
        cy.get('#signin2').click() // sign up
        cy.get('#signInModalLabel').should('have.attr', 'id', 'signInModalLabel') // Assertion
        cy.get('#sign-username').type('Amada')
        cy.get('#sign-username').should('have.attr','type','text') // Assertion
        cy.get('#sign-password').type('Amada')
        cy.get('#sign-password').should('have.attr', 'type', 'password') // Assertion
        
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });
});