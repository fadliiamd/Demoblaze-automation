/// <reference types="cypress" />

describe('Should try test Demoblaze web', () => {
    it.only('Should visit the website', () => {
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
    it('Should check about us and cart', () => {
        cy.get(':nth-child(3) > .nav-link').click() // about us link
        cy.get('#videoModalLabel').should('have.text', 'About us') // Assertion
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

        cy.get('#cartur').click() // cart link
        cy.get('.col-lg-8 > h2').should('contain','Products') // Assertion
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
    it('Should check login', () => {
        cy.get('#login2').click() //Login
        cy.get('#logInModalLabel').should('have.attr', 'id', 'logInModalLabel') // Assertion
        
        cy.get('#loginusername').type('Amada')
        cy.get('#loginusername').should('have.attr','type','text') // Assertion
        cy.get('#loginpassword').type('Amada')
        cy.get('#loginpassword').should('have.attr','type','password') // Assertion
    });
    it.only('Should check sidebar', () => {
        cy.xpath("//a[text()='Phones']").click()
        cy.xpath("//a[text()='Laptops']").click()
        cy.xpath("//a[text()='Monitors']").click()
    })
});