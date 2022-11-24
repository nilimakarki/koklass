import * as commonActionsObj from "../../pageObject/CommonActions/commonActionsObj";

Given('Visit Koklass URL', () => {
    cy.visitKoklassPage()

})

And('Click Sign Up tag from header', () => {
    commonActionsObj.clickSignupFromNavbar()
})

And('Click Login tag from header', () => {
    commonActionsObj.clickLoginFromNavbar()
})

And('I want to login', (email, password) => {
    cy.readFile("cypress/helper/savedData/user.json").then((data) => {
        cy.userLogin(data.email, data.password)
    })
    cy.visitKoklassPage();
})

And('I want to check if url contains {string}',(string)=>{
    cy.checkURLs(string);
})

And('I want to check if the breadcrumb contains',(breadcrumbs)=>{
    var arrayBreadcrumbs = [];
    breadcrumbs.hashes().forEach(ele=>{
        arrayBreadcrumbs.push(ele.breadcrumbs);
    })
    cy.checkBreadcrumbs(arrayBreadcrumbs);
})

//!Check Alert Message
And('I want to check alert message',(alertmessages)=>{
    var arrayAlertmessages = [];
    alertmessages.hashes().forEach(ele=>{
        arrayAlertmessages.push(ele.alertMessages);
    })
    cy.checkToasterAlerts(arrayAlertmessages);
})

And('I want to logout', () => {
    commonActionsObj.clickLogout()
})