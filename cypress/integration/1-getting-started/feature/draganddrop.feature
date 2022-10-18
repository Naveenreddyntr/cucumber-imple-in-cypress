Feature:Drag and Drop

    Dragging and Dropping boxes
    Scenario:Drag and drop
        Given visit home page
        Then verify the homepage title is 'Welcome to the-internet'
        And verify and click the drag and drop link
        Then verify the drag and drop page title is 'Drag and Drop'
        And verify the property of boxA and boxB
        Then verify the data before drag and drop
        And perform drag and drop property
        Then verify the data After drag and drop
