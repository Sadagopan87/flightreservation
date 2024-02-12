/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import FlightSelectionPage from "../../Pages/FlightSelectionPage/FlightSelectionPage.cy"
import testdata from "../../../../fixtures/testdata.json"
const flightselction = new FlightSelectionPage();

And("Select a inbound and outbound flight for the travel.", () => {
    //Outbound Selection
    flightselction.selectFlights().click()
    //Inbound Selection
    flightselction.selectFlights().click()

});

And("Select Fair type as Basic and Verify the selection.", () => {
    flightselction.selectBasicFairType().click()
    flightselction.confirmBasicFairType().click()
    flightselction.clickLoginLater().click()
    //Asset verification for Basic Fair Selection
    flightselction.confirmBasicFairTitle().should('have.text',' Basic ');
    flightselction.confirmBasicFairSubTitle().should('have.text',' Travel light ');

});

And("Check the user able to see the passenger user form and entry columns for the added 3 passengers.", () => {
    flightselction.confirmPassengerForm().should('have.text','Passengers');
    flightselction.PassengerFieldsCnt().should('have.length',3);

});

And("Enter the passenger details and click continue button.", () => {
    flightselction.passengerFieldAlsone().click();
    flightselction.passengerAls().click();
    flightselction.passengersoneFn().type(testdata.passenger1_fn);
    flightselction.passengersoneLn().type(testdata.passenger1_ln);
    flightselction.passengerFieldAlstwo().click();
    flightselction.passengerAls().click();
    flightselction.passengerstwoFn().type(testdata.passenger2_fn);
    flightselction.passengerstwoLn().type(testdata.passenger2_ln);
    flightselction.childoneFn().type(testdata.child1_fn);
    flightselction.childoneLn().type(testdata.child1_ln);
    flightselction.userFormcontinueClk().click();
});

And("Complete the seat selection and navigate in to baggage page.", () => {
    //Confirm family seats popup
    flightselction.familySeatConfirmClk().click();
    //Confirm recommanded seats
    flightselction.passengersSeatConfirmclk().click();
    //Skip fasttrack
    flightselction.skipFastrackClk().click();

});