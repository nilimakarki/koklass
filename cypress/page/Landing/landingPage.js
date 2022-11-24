export class LandingPage {
    clickProduct() {
        cy.get(".grid-wrapper > :nth-child(1) > app-product-grid-item > .list-product > .product-decs > h2 > .product-link")
            .click()
            .wait(2000)
    }

    categoryTitle(title) {
        cy.get(".feature-area > .container > .row > .col-md-12 > .section-title > :nth-child(1) > h2").then((el) => {
            const text = el[0].textContent
            expect(text).to.be.oneOf(title)
        })
    }
}