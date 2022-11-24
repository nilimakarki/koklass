export class PageToasterAlerts{
    //!Grab Text Alerts
    grabAllAlertsText() {
        const alertTexts = [];
        return cy.get('.toast-message').wait(1500).each(p => {
            const alert = p.text().trim();
            alertTexts.push(alert);
        }).then(() => {
            return alertTexts;
        })
    }
}