Feature: Add/remove a bet to the betslip

  Background:
    Given I navigate to the event page for fridays fixtures
    When  I add a bet to my betslip

Scenario: Add a bet to betslip
  Then I should be able to see my bet added to the betslip

Scenario: Remove a bet from betslip
  Then I remove my bet from the betslip