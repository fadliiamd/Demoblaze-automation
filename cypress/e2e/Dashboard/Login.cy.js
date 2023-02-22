/// <reference types="cypress" />

describe('Should try test Demoblaze web', () => {
    it('Should visit the website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url('').should('include','')
    });
    it('Should check login', () => {
        cy.get('#login2').click() //Login
        cy.get('#logInModalLabel').should('have.attr', 'id', 'logInModalLabel') // Assertion
        
        cy.get('#loginusername').type('Amada')
        cy.get('#loginusername').should('have.attr','type','text') // Assertion
        cy.get('#loginpassword').type('Amada')
        cy.get('#loginpassword').should('have.attr','type','password') // Assertion
    });
});