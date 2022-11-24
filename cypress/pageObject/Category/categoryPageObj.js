import { CategoryPage } from "../../page/Category/categoryPage";

const categoryP = new CategoryPage()
export function verifyCategoryTitle(){
    cy.readFile("cypress/helper/apiData/category.json").then((data) => {
        categoryP.categoryTitle(data)
    });
}