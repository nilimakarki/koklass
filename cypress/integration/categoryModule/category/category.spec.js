import { And, Before } from "cypress-cucumber-preprocessor/steps";
import * as apiObj from "../../../pageObject/Api/apiObj"
import * as landingPageObj from "../../../pageObject/Landing/landingPageObj"
import * as commonActionsObj from "../../../pageObject/CommonActions/commonActionsObj"
import * as categoryPageObj from "../../../pageObject/Category/categoryPageObj"

Before(() => {
    apiObj.homeCategoryTitle()
    apiObj.categoryApiTitle()
});

And('I want to compare title of appCategories listed in ui with appCategories listed in home api', () => {
    landingPageObj.verifyCategoryTitle()  
})

And('I want to go click more categories from navbar', () => {
    commonActionsObj.clickMoreCategories()
    
})

And('I want to compare the title of category list displayed in ui to catogery list in category api', () => {
    categoryPageObj.verifyCategoryTitle()
})