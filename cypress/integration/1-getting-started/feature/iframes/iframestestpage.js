import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage.po'
import iFrames from '../../../../support/pageObjects/iframes.po'

const homepageobject = new HomePage()
const iframesobject = new iFrames()

Given('visit the homepage', () => {
    cy.visit(Cypress.env('homepage'))

})
When('verify the homepage title is {string}', title=> {
    homepageobject.homePageVerification()
})
Then('click on frames and verify Framespage is {string}', pagetitle=> {
    homepageobject.framepage()
})
Then('verify and click on iFrames', () => {
    iframesobject.iframespage()
})
And('Achive iFramebody', () => {
    iframesobject.getiFrameBody()
})
Then('change the text color', () => {
    iframesobject.fontColor()
})
Then('align the text', () => {
    iframesobject.textAlignment()
})