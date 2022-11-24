export class PageBreadCrumbs{
    //!Grab Breadcrumbs
    grabAllBreadcrumbsText() {
        const breadcrumbTexts = [];
        return cy.get('.breadcrumb-links > li').wait(1500).each(p => {
            const breadcrumb = p.text().trim();
            breadcrumbTexts.push(breadcrumb);
        }).then(() => {
            return breadcrumbTexts;
        })
    }
}
