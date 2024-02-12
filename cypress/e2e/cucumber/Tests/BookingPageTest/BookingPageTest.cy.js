/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import BookingPage from "../../Pages/BookingPage/BookingPage.cy";
import FlightSelectionPage from "../../Pages/FlightSelectionPage/FlightSelectionPage.cy";
import testdata from "../../../../fixtures/testdata.json"
const booking = new BookingPage();
const flightselction = new FlightSelectionPage();
Given("I navigate to the Ryanair Website.", () => {
    booking.enterURL(testdata.url);
    
});

And("Search a flight ticket from {string} to {string}.", (from, to) => {
    booking.selectDeparture().type(from);
    booking.selectDestination().type(to);
    cy.wait(5000)
    booking.selectDestination().type("{enter}");

});

When("A user Pick a date for travel then add 2 Adults and 1 children passenger and See the available flight using Search.", () => {
    //clicking From date.
    booking.selectDate().eq(8).click();
    //clicking to date.
    booking.selectDate().eq(14).click();
    cy.wait(5000)
    //Adding 2 Adults passenger.
    booking.addAdult().click();
    //Adding one child.
    booking.addChild().click();
    //Click Done and search for a fliight.
    booking.doneclick().click();
    booking.searchClick().click();

});

