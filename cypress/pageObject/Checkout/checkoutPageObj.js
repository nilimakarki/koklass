import { CheckoutPage } from "../../page/Checkout/checkoutPage";
import * as fakerDataObj from "../../helper/fakerData/fakerData"

const checkoutP = new CheckoutPage()

export function fill_up_address_form(){
    let data = fakerDataObj.getAddressFormData()
    checkoutP.customerNameInputField(data.cunstomername)
    checkoutP.contactNumberInputField(data.phoneNumber)
    checkoutP.addressInputField(data.address)
}

export function select_map_location(){
    let data = fakerDataObj.getAddressFormData()
    checkoutP.selectMapLocation(data.x, data.y)
}

export function clickNextButton(){
    checkoutP.clickNextButton()
}

export function selectPaymentMethod(){
    checkoutP.paymentMethod()
}

export function clickPlaceOrderButton(){
    checkoutP.clickPlaceOrderButton()
}