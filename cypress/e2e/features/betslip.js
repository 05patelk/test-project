import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const fridayFixturesPage  = require("../../e2e/pageobjects/fridayFixturesPage");

Given('I navigate to the event page for fridays fixtures', () => {
    cy.visit("/sports/#/soccer/daily/1665702000000");
    fridayFixturesPage.acceptCookies();
})

When('I add a bet to my betslip', () => {
    fridayFixturesPage.addABet();
    fridayFixturesPage.openBetSlip();
})

Then('I should be able to see my bet added to the betslip', () => {
    fridayFixturesPage.betslipShouldContainBet();
})

Then('I remove my bet from the betslip', () => {
    fridayFixturesPage.removeBet();
})