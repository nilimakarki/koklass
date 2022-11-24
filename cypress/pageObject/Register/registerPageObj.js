import { RegisterPage } from "../../page/Register/registerPage"
import * as fakerDataObj from "../../helper/fakerData/fakerData"
const registerP = new RegisterPage()

export function fill_signup_form() {
    //form function calling
    let data = fakerDataObj.getUserSignupData();
    registerP.firstNameInputField(data.firstname);
    registerP.lastNameInputField(data.lastname);
    registerP.phoneNumberInputField(data.phoneNumber);
    registerP.emailInputField(data.email);
    registerP.passwordInputFiled(data.password);
    registerP.confirmPasswordInputFiled(data.password);
} 

export function clickSignupBtnObj(string){
    registerP.signUpButton(string);
}