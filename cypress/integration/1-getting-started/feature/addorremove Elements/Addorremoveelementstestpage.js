import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage.po'
import AddorRemove from '../../../../support/pageObjects/addorremoveelements.po'
const homepageobject = new HomePage()
const AddorRemoveElementsObject = new AddorRemove()


Given('visit to homepage', () => {
    cy.visit(Cypress.env('homepage'))
})
Then('I should see the page title is {string}', title=> {
    homepageobject.homePageVerification()   
})
And('click on addorremove elements', () => {
    homepageobject.clickingAddorRemoveElements()

})
Then('I should see page title is {string}', pagetitle=> {
   AddorRemoveElementsObject.addorRemoveElementsPageVerify()
})

And('verify the addelements button and click', () => {
    AddorRemoveElementsObject.addElementButtonVerification()
   AddorRemoveElementsObject.cilckingAddElement()
})


And('verify and click on addelement button', () => {
    AddorRemoveElementsObject.addElementButtonVerification()
    AddorRemoveElementsObject.cilckingAddElement()
  
})

Then('verify and click on Delete button', () => {
AddorRemoveElementsObject.deleteButtonVisible()
AddorRemoveElementsObject.cilckingDeleteElement()
AddorRemoveElementsObject.deleteButtonNotVisible()


})