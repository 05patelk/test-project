Feature: Change the odds format

Scenario: Change odds format from fractional to decimal
  Given Odds format is fractional
  When I click on decimal
  Then the odds change to decimal