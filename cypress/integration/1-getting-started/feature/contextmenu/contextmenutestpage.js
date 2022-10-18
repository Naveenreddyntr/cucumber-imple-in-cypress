import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import ContextMenu from '../../../../support/pageObjects/ContextMenu.po'
import HomePage from '../../../../support/pageObjects/Homepage.po'
const contextmenupageobject = new ContextMenu()
const homepageobject = new HomePage()


Given('visit the homepage', function () {

    cy.visit(Cypress.env('homepage'))

})
Then("I should see the page title is {string}", title => {
    homepageobject.homePageVerification()
})

And('click on the ContextMenu', () => {
    homepageobject.contextMenuPage()

})

Then("I should see the page tite is {string}", pagetitle => {
    contextmenupageobject.contextMenuPageVerify()
})

Then('Click in the rectangle area and handle alert messages', () => {
    contextmenupageobject.handleAlertMessage()
})