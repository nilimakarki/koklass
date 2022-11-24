import * as commonActionsObj from "../../../pageObject/CommonActions/commonActionsObj"
import * as searchPageObj from "../../../pageObject/Search/searchPageObj"

And('I want to search product {string}', (productName) => {
    commonActionsObj.productSearch(productName)  
})

And('I want to add product to cart', () => {
    searchPageObj.addProductToCart()
})

And('I want to change warehouse', () => {
    commonActionsObj.changeWarehouse()
})

And('I want to check if the cart count is {string}', (count) => {
    commonActionsObj.verifyCartCount(count)
})
