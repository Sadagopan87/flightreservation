/// <reference types="cypress" />
class FlightSelectionPage {
    selectFlights() {
        return cy.contains('Select')

    }

    selectBasicFairType() {
        return cy.get('[data-e2e="fare-card-standard"] > .fare-table__fare-column-border')

    }

    confirmBasicFairType() {
        return cy.get(':nth-child(2) > fare-table-upgrade-footer > .fare-footer__submit-btn')

    }

    clickLoginLater() {
        return cy.get('.login-touchpoint__login-later')

    }

    confirmBasicFairTitle() {
        return cy.get('.fare-selection-summary__title')

    }

    confirmBasicFairSubTitle() {
        return cy.get('.fare-selection-summary__subtitle')

    }
    confirmPassengerForm() {
        return cy.get('.app-title')

    }
    PassengerFieldsCnt() {
        return cy.get(':nth-child(2) > pax-passenger > .passenger > ')

    }

    passengerFieldAlsone() {
        return cy.get(':nth-child(1) > pax-passenger > .passenger > pax-passenger-details-container > pax-passenger-details > .details-form-container > pax-details-form > #title-0-error-message > .dropdown > .dropdown__toggle')

    }

    passengerFieldAlstwo() {
        return cy.get(':nth-child(2) > pax-passenger > .passenger > pax-passenger-details-container > pax-passenger-details > .details-form-container > pax-details-form > #title-0-error-message > .dropdown > .dropdown__toggle')

    }

    passengerAls() {
        return cy.get('[data-ref="title-item-0"] > .dropdown-item__link > .dropdown-item__content > .dropdown-item__label')

    }



    passengersoneFn() {
        return cy.get(':nth-child(1) > pax-passenger [data-ref="pax-details__name"]')

    }

    passengersoneLn() {
        return cy.get(':nth-child(1) > pax-passenger [data-ref="pax-details__surname"]')

    }

    passengerstwoFn() {
        return cy.get(':nth-child(2) > pax-passenger [data-ref="pax-details__name"]')

    }

    passengerstwoLn() {
        return cy.get(':nth-child(2) > pax-passenger [data-ref="pax-details__surname"]')

    }

    childoneFn() {
        return cy.get(':nth-child(3) > pax-passenger [data-ref="pax-details__name"]')

    }

    childoneLn() {
        return cy.get(':nth-child(3) > pax-passenger [data-ref="pax-details__surname"]')

    }

    userFormcontinueClk() {
        return cy.get('.continue-flow__button')

    }

    familySeatConfirmClk() {
        return cy.get('.seats-modal__cta')

    }

    passengersSeatConfirmclk() {
        return cy.get('.passenger-carousel__cta')

    }

    skipFastrackClk() {
        return cy.get('.enhanced-takeover-beta__product-dismiss-cta')

    }




}
export default FlightSelectionPage;

