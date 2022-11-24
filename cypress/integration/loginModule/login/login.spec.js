import * as loginPageObj from "../../../pageObject/Login/loginPageObj"
import * as commonActionsObj from "../../../pageObject/CommonActions/commonActionsObj"

const {Before} = require("cypress-cucumber-preprocessor/steps");

//! Dynamic Flow Control Operations
Before({tags: "@invalid"},()=>{
    cy.dynamicFlowControl('login','invalid','Login with invalid credentials')
})

Before({tags: "@valid"},()=>{
    cy.dynamicFlowControl('login','valid','Login with valid credentials')
})

Before({tags: "@check"},()=>{
    cy.dynamicFlowControl('login','check','Check Redirect Page After Clicking ForgotPassword Button')
})

//! Login with Credentials
And('I want to use invalid login Credentials',(loginCredentials)=>{  
    loginCredentials.hashes().forEach(ele=>{
        loginPageObj.fill_invalid_login_info(ele.email,ele.password);
    })      
})

And('I want to use valid login Credentials',()=>{  
    loginPageObj.fill_valid_login_info()
})

And('I want to click {string} button',(string)=>{    
    loginPageObj.clickLoginBtnObj(string)
})

And('I want to click forgot password',()=>{    
    loginPageObj.clickForgotPassword()
})

And("I want to verify logged in user's firstname is seen in navbar",()=>{   
    commonActionsObj.verifyLoggedInUser() 
})