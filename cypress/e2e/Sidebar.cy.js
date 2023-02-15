/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Should try test Demoblaze web', () => {
    it('Should visit the website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url('').should('include','')
    });
    it('Should check sidebar', () => {
        cy.xpath("//a[text()='Phones']").click()
        cy.xpath("//a[text()='Laptops']").click()
        cy.xpath("//a[text()='Monitors']").click()
    })
});