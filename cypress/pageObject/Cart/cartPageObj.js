import { CartPage } from "../../page/Cart/cartPage";
import * as apiObj from "../../pageObject/Api/apiObj"
const cartPageP = new CartPage()

// to check that the number of product listed in cart page mathces with cart count in navbar
export function verifyCartListCount(){
    cartPageP.cartListCount()
}

export function enterValueInQuantityInputArea(quantity){
    cartPageP.enterValueInQuantityInputArea(quantity)
}

export function clickProceedToCheckout(){
    cartPageP.clickProceedToCheckout()
}

export function verifyProductTitle(){
    apiObj.cartApi()
    cy.readFile("cypress/helper/apiData/cart.json").then((data) => {
        cartPageP.productTitle(data[0].product.title)
    });
    
}