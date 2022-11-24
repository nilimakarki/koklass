Feature: Signup

    Background: Visit register page
        Given Visit Koklass URL
        And Click Sign Up tag from header

@invalid  
    Scenario: New user sign up with empty data in all input fields 
        And I want to check if url contains "/register"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Sign Up    |
        And I want to click "Sign Up" button
        And I want to check alert message
            |alertMessages   |
            |Please fill up the form correctly!  |
        And I want to check if url contains "/register"

@valid  
    Scenario: New user sign up with valid data in all input fields 
        And I want to check if url contains "/register"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Sign Up    |
        And I want to fill sign up form
        And I want to click "Sign Up" button
        And I want to check alert message
            |alertMessages   |
            |User Created Successfully!  |
        And I want to check if url contains "/login"