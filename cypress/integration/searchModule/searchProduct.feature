Feature: Search

    Background: Visit Koklass url
        Given Visit Koklass URL
        
    Scenario Outline: Search products, add them to cart, change warehouse and validate cart count
        And I want to search product "<productName>"
        And I want to check if url contains "/search"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Search    |
        And I want to add product to cart
        And I want to check alert message
            |alertMessages   |
            |Cart Added Sucessfully!  |
        And I want to change warehouse
        And I want to check if the cart count is "0"

        Examples:
            |productName    |
            |mango   |
            |kombucha   |