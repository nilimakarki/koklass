Feature: Add Product

    Background: Visit Product Detail Page
        Given Visit Koklass URL
        And I want to login
        


    Scenario: Add product to cart and perform checkout
        And I want to click any product from home page
        And I want to check if url contains "/mango-malda"
        And I want to check if the breadcrumb contains
            |breadcrumbs    |
            |Home   |
            |Mango (Malda)    |
        And I want to click "Add To Cart" button
        And I want to check alert message
            |alertMessages   |
            |Cart Added Sucessfully!  |
        And I want to go to cart page
        And I want to check if url contains "/cart"
        And I want to verify if the count of cart list matches with the number displayed in the cart of navbar
        And I want to compare the product listed in cart ui with product listed in cart api
        And I want to enter 2 in quantity input field
        And I want to click Proceed to Checkout 
        And I want to fill up address form
        And I want to select location from map
        And I want to click next
        And I want to select payment method 
        And I want to click Place Order 
        And I want to check alert message
            |alertMessages   |
            |Checkout Successful!  |
        And I want to check if the cart count is "0"
        And I want to logout
        And I want to check if url contains "/login"

