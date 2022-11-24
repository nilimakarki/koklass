import { LoginPage } from "../../page/Login/loginPage";

const loginP = new LoginPage()

export function fill_valid_login_info(){
    cy.readFile("cypress/helper/savedData/user.json").then((data) => {
        loginP.emailInputField(data.email)
        loginP.passwordInputFiled(data.password)
    })
}

export function fill_invalid_login_info(email, password){
    loginP.emailInputField(email)
    loginP.passwordInputFiled(password)
}

export function clickLoginBtnObj(string){
    loginP.clickLoginButton(string)
}

export function clickForgotPassword(string){
    loginP.forgotPasswordButton(string)
}