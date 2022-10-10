import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const fridayFixturesPage  = require("../../e2e/pageobjects/fridayFixturesPage");

Given(/^Odds format is fractional$/, function () {
  cy.visit("/sports/#/soccer/daily/1665702000000");
  fridayFixturesPage.acceptCookies();
  fridayFixturesPage.shouldIncludeFraction();

});
When(/^I click on decimal$/, function () {
 fridayFixturesPage.changeToDecimal();
});
Then(/^the odds change to decimal$/, function () {
  fridayFixturesPage.shouldIncludeDecimal();
});