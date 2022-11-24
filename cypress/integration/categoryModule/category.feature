Feature: Verify category ui

    Background: Visit Koklass url
        Given Visit Koklass URL
        And I want to login
        
        
    Scenario: Validate appCategories and category list displayed in ui
        And I want to compare title of appCategories listed in ui with appCategories listed in home api
        And I want to go click more categories from navbar
        And I want to check if url contains "/categories"
        And I want to compare the title of category list displayed in ui to catogery list in category api
        And I want to logout
        And I want to check if url contains "/login"

