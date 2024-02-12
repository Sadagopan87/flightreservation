/// <reference types="cypress" />
class ExtrasPage {
    bagScreenText() {
        return cy.get('[data-card-title=""] > .main-header > .main-header__title')

    }
    selectSmallBags() {
        return cy.get('[data-ref="product.small-bag"] .ry-radio-button > .ry-radio-circle-button__label')

    }

    selectExtrabagPassengerOne() {
        return cy.get(':nth-child(1) > .pax-row__controls > bags-checkin-bag-table-controls.ng-star-inserted > .twenty-kg > bags-twenty-kg-bags > .content [data-ref="counter.counter__increment"]')

    }
    selectExtrabagPassengerTwo() {
        return cy.get(':nth-child(2) > .pax-row__controls > bags-checkin-bag-table-controls.ng-star-inserted > .twenty-kg > bags-twenty-kg-bags > .content [data-ref="counter.counter__increment"]')

    }
    bagscontinueBtn() {
        return cy.contains('Continue')

    }

    dealpageTextVerification() {
        return cy.get('.app-container__main-header-title')  

    }

    extraPageContinueBtn() {
        return cy.get('.airport-and-flight__cta')  

    }
    transportPageContinueBtn() {
        return cy.get('.transport__cta')  

    }
    authPopupHeaderTitle() {
        return cy.get('.auth-popup__header-title')  

    }
    authPopupHeaderSubTitle() {
        return cy.get('.header-modal__title > .body-l-lg')  

    }
    authPopupLoginBtn() {
        return cy.get('.auth-submit__button')  

    }
}
export default ExtrasPage;