
Feature: Add/remove Elements

    Adding and deleting Elements
    Background: opens the Add\Remove elements page
        Given visit to homepage
        Then I should see the page title is 'Welcome to the-internet'
        And click on addorremove elements
        Then I should see page title is 'Add/Remove Elements'
    Scenario: Adding Element

        And verify the addelements button and click

    Scenario: DeleteElement

        And verify and click on addelement button
        Then verify and click on Delete button
