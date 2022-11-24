import { CommonActions } from "../../page/CommonActions/commonActions";

const commonActionsP = new CommonActions();

export function clickLoginFromNavbar(){
    commonActionsP.clickLogin();
}

export function clickSignupFromNavbar(){
    commonActionsP.clickSignUp()
}

//verify logged in user by checking the navbar name section
export function verifyLoggedInUser() {
    cy.readFile("cypress/helper/savedData/user.json").then((data) => {
        commonActionsP.userInfoSection(data.firstname);
    })
}

export function productSearch(text){
    commonActionsP.enterTextInSearchField(text)
    commonActionsP.clickSearchIcon()
}

export function changeWarehouse(){
    commonActionsP.clickWarehouseSection()
    commonActionsP.changeWarehouse()
}

export function verifyCartCount(count){
    commonActionsP.cartIconCount(count)
}

export function clickCartIcon(){
    commonActionsP.clickCartIcon()
}

export function clickLogout(){
    commonActionsP.clickLogout()
}

export function clickMoreCategories(){
    commonActionsP.moreCategories()
}


 