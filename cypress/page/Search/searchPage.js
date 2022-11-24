export class SearchPage{
    //hover random product
    clickAddToCartText(){
        cy.get(":nth-child(1) > app-product-grid-item > .list-product > div.add-to-link > ul > li > a")
          .invoke('show')
          .click({force: true})
          .wait(1000)
    }
    
    clickAddToCartButton(){
        cy.get(".btn__main")
          .click()
          .wait(2000);
    }
}