export class CartPage{

    // to check that the number of product listed in cart page mathces with cart count in navbar
    cartListCount(){
        cy.get(".table-content > table > tbody")
          .find('tr')
          .then((row) => {
              const count = (row.length).toString()
              cy.get(".mini-cart-warp > a.count-cart").should("have.attr", "data-cart").and("eq", count);
        })      
    }

    clickProceedToCheckout(){
        cy.get(".grand-totall > a")
        .click()
        .wait(2000);
    }

    enterValueInQuantityInputArea(quantity){
        cy.get(".cart-plus-minus > input[type='text']")
          .clear()
          .type(quantity)
          .wait(2000)
    }

    productTitle(title){
        cy.get(".product-name > a")
          .should("contain", title)
          .wait(1000)
    }
}