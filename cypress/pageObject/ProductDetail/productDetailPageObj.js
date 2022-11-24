import { ProductDetailPage } from "../../page/ProductDetail/productDetailPage";

const productDetailP = new ProductDetailPage()

export function clickAddToCartButton(title){
    productDetailP.clickAddToCartButton(title)
}