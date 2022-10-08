import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the pokerstars homepage', () => {
    cy.visit(" https://www.pokerstarssports.uk")
})

When('I submit multiple popular bets to the betslip', () => {
    cy.get('em[class=selection-odds button__bet__odds]').click
    cy.get('em[class=selection-odds button__bet__odds]').click
})