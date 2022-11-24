export class LoginPage {
  
    // login form
    emailInputField(email) {
      cy.get('input[placeholder="Email/Phone number"]')
        .clear({force:true})
        .type(email)
        .should('have.value',email)
        .wait(1000);
    }
  
    passwordInputFiled(password) {
      cy.get('input[placeholder="Password"]')
        .clear({force:true})
        .type(password)
        .should('have.value',password)
        .wait(1000);
    }
  
    clickLoginButton(title) {
      cy.get(".button-box > button")
        .contains(title)
        .click()
        .wait(2000);
    }
  
    forgotPasswordButton() {
      cy.get(".login-toggle-btn > a")
        .click()
        .wait(2000);
    }
}