class fridayFixturesPage {
    elements = {
        acceptCookies: () => cy.get("button[id=onetrust-accept-btn-handler]"),
        bet: () => cy.get('a[id="event-schedule-selection-5631817299"]'),
        betSlip:() => cy.get('i[class="icon-betslip"]'),
        betSlipLabel: () =>  cy.get('label[for="checkbox-bet-5631817299"]'),
        removeBet: () => cy.get('a[class="remove "]'),
        priceFormatDD: () => cy.get('div[id="priceFormat"]'),
        selectDecimal: () => cy.get('a[id="Decimal"]')
    }

    acceptCookies() {
        if (this.elements.acceptCookies().should('include.text', "Accept All Cookies")) {
            this.elements.acceptCookies().click();
        }
    }

    addABet() {
        this.elements.bet().click({force: true});
    }

    openBetSlip() {
        this.elements.betSlip().click();
    }

    betslipShouldContainBet() {
        this.elements.betSlipLabel().should('include.text',"Getafe");
    }

    removeBet() {
        this.elements.removeBet().click();
    }

    shouldIncludeFraction() {
       this.elements.bet().should('include.text',"/");
    }

    shouldIncludeDecimal() {
        this.elements.bet().should('include.text',".");
    }

    changeToDecimal() {
        this.elements.priceFormatDD().click();
        this.elements.selectDecimal().click();
    }

}

module.exports = new fridayFixturesPage();