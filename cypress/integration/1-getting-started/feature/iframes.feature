Feature: iFrames

    iFrames
    Background: visit iframes page
        Given visit the homepage
        When verify the homepage title is 'Welcome to the-internet'
        Then click on frames and verify Framespage is 'Frames'
        Then verify and click on iFrames
        And Achive iFramebody
    Scenario: should change the text color
        Then change the text color
    Scenario: should alignment text
        Then align the text
