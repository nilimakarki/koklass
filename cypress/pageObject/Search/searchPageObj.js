import { SearchPage } from "../../page/Search/searchPage"

const searchPageP = new SearchPage()

export function addProductToCart(){
    searchPageP.clickAddToCartText()
    searchPageP.clickAddToCartButton()
}