Feature: Test to search a flight for 3 passengers. 
Scenario: Test to search a flight and complete all the stpes then navigate till the Login page.
Given I navigate to the Ryanair Website.
And Search a flight ticket from "Madrid" to "Dublin".
When A user Pick a date for travel then add 2 Adults and 1 children passenger and See the available flight using Search.
And Select a inbound and outbound flight for the travel.
And Select Fair type as Basic and Verify the selection.
And Check the user able to see the passenger user form and entry columns for the added 3 passengers.
And Enter the passenger details and click continue button.
And Complete the seat selection and navigate in to baggage page.
And Select Extra 20 kg for the two adult passenger and continue the Next screen.
When A user Skip the Extra and transport page and continue to Final page.
Then The User should see the Login Popup.



