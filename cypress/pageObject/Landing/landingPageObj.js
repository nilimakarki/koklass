import { LandingPage } from "../../page/Landing/landingPage";
import * as apiObj from "../../pageObject/Api/apiObj"

const landingP = new LandingPage()

export function click_product(){
    landingP.clickProduct()
} 

export function verifyCategoryTitle(title){
    cy.readFile("cypress/helper/apiData/appCategories.json").then((data) => {
        landingP.categoryTitle(data)
    });
}