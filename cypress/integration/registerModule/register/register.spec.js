import * as registerPageObj from "../../../pageObject/Register/registerPageObj"
import * as commonActionsObj from "../../../pageObject/CommonActions/commonActionsObj"
const {Before} = require("cypress-cucumber-preprocessor/steps");

//! Dynamic Flow Control Operations
Before({tags: "@invalid"},()=>{
    cy.dynamicFlowControl('signup','invalid','New user sign up with empty data in all input fields')
})

Before({tags: "@valid"},()=>{
    cy.dynamicFlowControl('signup','valid','New user sign up with valid data in all input fields')
})

And('I want to fill sign up form',()=>{    
    registerPageObj.fill_signup_form()
})

And('I want to click {string} button',(string)=>{    
    registerPageObj.clickSignupBtnObj(string);
})