export class CommonActions{
    //!Nav Header
    clickLogin(){
        cy.get('.setting__dropdown')
          .click()
          .wait(1000)
    }

    clickSignUp(){
        cy.get(':nth-child(2) > [routerlink="/register"]')
          .click()
          .wait(1000)
    }

    enterTextInSearchField(text){
      cy.get('input[placeholder="Search product."]')
        .clear()
        .type(text)
        .wait(1000);
    }

    clickSearchIcon(){
      cy.get('.web_dropdown_search > form.ng-valid > [type="submit"]')
        .click()
        .wait(2000);
    }

    cartIconCount(count) {
      cy.get(".mini-cart-warp > a.count-cart").should("have.attr", "data-cart").and("eq", count);
    }

    clickWarehouseSection() {
      cy.get(".left-text > .location__select__wrapper > .select__inner > .ng-select")
        .click()
        .wait(1000)
        
    }
  
    changeWarehouse(){
      cy.get('.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child')
        .click()
        .wait(1000)
      cy.get('.ml-2')
        .click()
        .wait(1000)
    }

    clickCartIcon(){
      cy.get("a.count-cart > img")
        .click()
        .wait(2000)
    }

    //after login scenerio
    userInfoSection(username) {
      cy.reload();
      cy.wait(5000);
      cy.get(".angle-icon").then((el) => {
        const elText = el[0].textContent.trim(" ");
        expect(elText).to.equal(username);
      });
    }

    // user section in nav bar 
    hoverOverUserIcon() {
      cy.get(".angle-icon")
        .realHover()
        .wait(1000);
    }
  
    //Click on Logout
    clickLogout() {
      cy.get('.dropdown > ul.dropdown-nav > li:nth-child(3) > a')
        .click({force: true})
        .wait(2000);
      cy.get(".ml-2")
        .click()
        .wait(1000)
    }

    moreCategories(){
      cy.get(":nth-child(11) > [href='/categories']")
        .click()
        .wait(2000)
    }
  
}