Feature: Login

    Background: Visit login page
        Given Visit Koklass URL
        And Click Login tag from header

@invalid  
    Scenario: Login with invalid credentials
        And I want to check if url contains "/login"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Login    |
        And I want to use invalid login Credentials
            |email  |password   |
            |n@1234 |1234   |
        And I want to click "Login" button
        And I want to check alert message
            |alertMessages   |
            |The user credentials were incorrect.  |
        And I want to check if url contains "/login"

@valid  
    Scenario: Login with valid credentials 
        And I want to check if url contains "/login"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Login    |
        And I want to use valid login Credentials
        And I want to click "Login" button
        And I want to check alert message
            |alertMessages   |
            |You Have Been Successfully Logged In!  |
        And I want to verify logged in user's firstname is seen in navbar

@check  
    Scenario: Check Redirect Page After Clicking ForgotPassword Button 
        And I want to check if url contains "/login"
        And I want to click forgot password
        And I want to check if url contains "/forgot-password"
        