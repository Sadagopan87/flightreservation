/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import ExtrasPage from "../../Pages/ExtrasPage/ExtrasPage.cy"
const extraspage = new ExtrasPage();

And("Select Extra 20 kg for the two adult passenger and continue the Next screen.", () => {
    extraspage.bagScreenText().should('have.text',' Cabin Bags ');
    extraspage.selectSmallBags().click(); 
    extraspage.selectExtrabagPassengerOne().click();
    extraspage.selectExtrabagPassengerTwo().click();
    extraspage.bagscontinueBtn().dblclick();
    extraspage.bagscontinueBtn().click();

});

When("A user Skip the Extra and transport page and continue to Final page.", () => {
    extraspage.dealpageTextVerification().should('have.text',' The best deals for your trip ');
    extraspage.extraPageContinueBtn().click(); 
    extraspage.transportPageContinueBtn().click();
    

});

Then("The User should see the Login Popup.", () => {
    extraspage.authPopupHeaderTitle().should('have.text','Log in to continue');
    extraspage.authPopupHeaderSubTitle().should('have.text','Make it simple with myRyanair'); 
    extraspage.authPopupLoginBtn().should('have.text',' Log in ');
    cy.screenshot();
    

});