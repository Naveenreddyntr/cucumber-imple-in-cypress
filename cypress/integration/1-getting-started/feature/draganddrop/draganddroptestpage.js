import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage.po'
import DragandDrop from '../../../../support/pageObjects/DragandDrop.po'
const homepageobject = new HomePage()
const DragandDropobject = new DragandDrop()
Given('visit home page', () => {
    cy.visit(Cypress.env('homepage'))

})
Then('verify the homepage title is {string}', title=> {
    homepageobject.homePageVerification()
})
And('verify and click the drag and drop link', () => {
    homepageobject.dragAndDropClick()
})
Then('verify the drag and drop page title is {string}', pagetitle=> {
    DragandDropobject.dragAndDropPageVerify()
})
And('verify the property of boxA and boxB', () => {
    DragandDropobject.verifyingProperty()
})
Then('verify the data before drag and drop', () => {
    DragandDropobject.beforeDragAndDrop()
})
And('perform drag and drop property', () => {
    DragandDropobject.draggingAndDroping()
})
Then('verify the data After drag and drop', () => {
    DragandDropobject.afterDragAndDropVerify()

})
