describe('should test table', () => {
    it('verify table correct', () => {
        cy.visit('https://practice.expandtesting.com/tables')
        
        cy.get('table#table1 tbody tr').then((row) => {
            const uiArray = []
            row.each((index, item) => {
                const cell = Cypress.$(item).find('td')
                const rowData = {
                    Cypress.$(cell[0]).text().trim(),
                }
            })
    })
})