/// <reference types="cypress" />
class BookingPage {
    enterURL(url) {
        cy.clearAllCookies();
        cy.visit(url);
        cy.wait(10000);
        cy.get("body").then($body => {
            if ($body.find('[data-ref="cookie.accept-all"]').length > 0) {
                cy.get('[data-ref="cookie.accept-all"]').then($header => {
                    if ($header.is(':visible')) {
                        cy.get('[data-ref="cookie.accept-all"]').click()
                    } else {

                    }
                });

            } else {
                assert.isOk('cokkies button click', 'everything fine with cokkie button')
            }

        });
    }

    selectDeparture() {
        return cy.get('#input-button__departure')
    }

    selectDestination() {
        return cy.get('#input-button__destination')
    }

    selectDateCalenderClk() {
        return cy.get('[data-ref="input-button__dates-from"]')
    }

    selectDate() {
        return cy.get('[class="calendar-body__cell"]')

    }

    addAdult() {
        return cy.get('[data-ref="passengers-picker__adults"] > .counter > .counter__button-wrapper--enabled')

    }

    addChild() {
        return cy.get('[data-ref="passengers-picker__children"] > .counter > .counter__button-wrapper--enabled')

    }

    doneclick() {
        return cy.get('.passengers__confirm-button')

    }

    searchClick() {
        return cy.get('button[aria-label="Search"]')

    }


}
export default BookingPage;

