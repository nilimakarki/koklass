import * as landingPageObj from "../../../pageObject/Landing/landingPageObj"
import * as productDetailPageObj from "../../../pageObject/ProductDetail/productDetailPageObj"
import * as commonActionsObj from "../../../pageObject/CommonActions/commonActionsObj"
import * as cartPageObj from "../../../pageObject/Cart/cartPageObj"
import * as checkoutPageObj from "../../../pageObject/Checkout/checkoutPageObj"
import * as apiObj from "../../../pageObject/Api/apiObj"
import { And, Before } from "cypress-cucumber-preprocessor/steps";

And("I want to click any product from home page",()=>{   
    landingPageObj.click_product()
})

And('I want to click {string} button',(string)=>{   
    productDetailPageObj.clickAddToCartButton(string)
})

And('I want to go to cart page',()=>{   
    commonActionsObj.clickCartIcon()
})

And('I want to verify if the count of cart list matches with the number displayed in the cart of navbar',()=>{   
    cartPageObj.verifyCartListCount()
})

And('I want to compare the product listed in cart ui with product listed in cart api',()=>{  
    apiObj.cartApi() 
    cartPageObj.verifyProductTitle()
})

And('I want to enter {int} in quantity input field',(int)=>{   
    cartPageObj.enterValueInQuantityInputArea(int)
})

And('I want to click Proceed to Checkout',()=>{   
    cartPageObj.clickProceedToCheckout()
})

And('I want to fill up address form',()=>{   
    checkoutPageObj.fill_up_address_form()
})

And('I want to select location from map',()=>{   
    checkoutPageObj.select_map_location()
})

And('I want to click next',()=>{   
    checkoutPageObj.clickNextButton()
    
})

And('I want to select payment method',()=>{   
    checkoutPageObj.selectPaymentMethod()
})

And('I want to click Place Order',()=>{   
    checkoutPageObj.clickPlaceOrderButton()
})

And('I want to check if the cart count is {string}', (count) => {
    commonActionsObj.verifyCartCount(count)
})

