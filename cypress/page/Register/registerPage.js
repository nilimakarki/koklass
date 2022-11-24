export class RegisterPage{
     //sign up form
    firstNameInputField(firstname) {
        cy.get('input[placeholder="Enter Your First Name"]')
          .clear()
          .type(firstname)
          .should('have.value',firstname)
          .wait(1000)
    }

    lastNameInputField(lastname) {
        cy.get('input[placeholder="Enter Your Last Name"]')
          .clear()
          .type(lastname)
          .should('have.value',lastname)
          .wait(1000)
    }

    phoneNumberInputField(phonenumber) {
        cy.get('input[placeholder="Enter Your Phone Number"]')
          .clear()
          .type(phonenumber)
          .should('have.value',phonenumber)
          .wait(1000)
    }

    emailInputField(email) {
        cy.get('input[placeholder="Enter Your Email"]')
          .clear()
          .type(email)
          .should('have.value',email)
          .wait(1000)
    }

    passwordInputFiled(password) {
        cy.get('input[placeholder="Password"]')
          .clear()
          .type(password)
          .should('have.value',password)
          .wait(1000)
    }

    confirmPasswordInputFiled(password) {
        cy.get('input[placeholder="Confirm Password"]')
          .clear()
          .type(password)
          .should('have.value',password)
          .wait(1000)
    }

    signUpButton(title) {
        cy.get('.button-box > button')
          .contains(title)
          .click()
          .wait(1000);
    }
}