export class CategoryPage{
    categoryTitle(title){
        cy.get(".category-list > .desc-listcategoreis > .name_categories > h4").each((el) => {
            expect(el.text()).to.be.oneOf(title);
        });
    }
}