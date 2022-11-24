export class ProductDetailPage{

    clickAddToCartButton(title) {
        cy.get(".pro-details-cart > button")
          .contains(title)
          .click()
          .wait(2000);
      }

}