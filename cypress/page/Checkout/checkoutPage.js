export class CheckoutPage{
    customerNameInputField(cname) {
        cy.get('input[placeholder="Enter Customer Name"]')
          .clear({force:true})
          .type(cname)
          .should('have.value',cname)
          .wait(1000);
    }

    contactNumberInputField(number) {
        cy.get('input[placeholder="Enter Contact Number"]')
          .clear({force:true})
          .type(number)
          .should('have.value',number)
          .wait(1000);
    }

    addressInputField(address) {
        cy.get('input[placeholder="Address Title"]')
          .clear({force:true})
          .type(address)
          .should('have.value',address)
          .wait(1000);
    }

    selectMapLocation(x, y){
        cy.get("#map")
          .click(x, y)
    }

    clickNextButton() {
        cy.get(".text-right > .btn")
          .click()
          .wait(2000);
    }

    paymentMethod(){
        cy.get("#payment-3")
          .check({ force: true })
          .wait(2000)
    }

    clickPlaceOrderButton() {
        cy.get(".btn-hover")
          .click()
          .wait(2000);
    }
}