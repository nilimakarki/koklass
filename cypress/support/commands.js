// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { PageBreadCrumbs } from "../page/CommonActions/pageBreadcrumbs"
import { PageToasterAlerts } from "../page/CommonActions/pageToasterAlerts"
import { LoginPage } from "../page/Login/loginPage"
import * as commonActionsObj from "../pageObject/CommonActions/commonActionsObj"

const pBreadcrumbs = new PageBreadCrumbs()
const pToasterAlerts = new PageToasterAlerts()
const loginP = new LoginPage()

//!Visit Koklass Page 
Cypress.Commands.add('visitKoklassPage', () => {  
    cy.visit(Cypress.env('dev').url).wait(2000);
})

//!Check Global Pages URLs
Cypress.Commands.add('checkURLs', (pURL) => {  
    cy.url().should('contain', pURL).wait(500)
})

//!Check Global Pages Breadcrumbs
Cypress.Commands.add('checkBreadcrumbs', (expectedBreadcrumbs) => {  
    pBreadcrumbs.grabAllBreadcrumbsText().then(actualBreadcrumb=>{
        expect(actualBreadcrumb).to.eql(expectedBreadcrumbs);
    })
})

//!Check Global Pages Toaster Alerts
Cypress.Commands.add('checkToasterAlerts', (expectedAlertsText) => {  
    pToasterAlerts.grabAllAlertsText().then(actualAlertsText=>{
        expect(actualAlertsText).to.eql(expectedAlertsText);
    })
})

//!Global Dynamic Flow Control on CRUD Operations
Cypress.Commands.add('dynamicFlowControl', (model,state,scenario) => {
    if(!Cypress.env('model')[model][state])
    {
        const states = window.testState;
        return cy.then(()=>states.onFinishScenario(scenario)).then(function () {
            return this.skip();
        });
    }
})

//!User Login
Cypress.Commands.add('userLogin', (email,password) => {
    cy.session([email,password], () => {
        cy.visitKoklassPage()
        commonActionsObj.clickLoginFromNavbar()
        loginP.emailInputField(email)
        loginP.passwordInputFiled(password)
        loginP.clickLoginButton("Login")
    })
})
