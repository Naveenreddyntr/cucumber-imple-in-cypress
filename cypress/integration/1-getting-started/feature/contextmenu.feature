Feature:ContextMenu

    Handling alert messages in ContextMenu

    Scenario: handling alert messages
        Given visit the homepage
        Then I should see the page title is 'Welcome to the-internet'
        And click on the ContextMenu
        Then I should see the page tite is 'Context Menu'
        Then Click in the rectangle area and handle alert messages 