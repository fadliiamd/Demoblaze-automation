/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Should try test Demoblaze web', () => {
    it('Should visit the website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url('').should('include','')
    });
    it('Should check about us and cart', () => {
        cy.xpath("//a[text()='About us']").click() // about us link
        cy.get('#videoModalLabel').should('have.text', 'About us') // Assertion
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

        cy.get('#cartur').click() // cart link
        cy.get('.col-lg-8 > h2').should('contain','Products') // Assertion
    });
});