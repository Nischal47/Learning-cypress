describe("Verify input fields", () => {
    it("verify intercept", () => {
        cy.intercept("https://practice.expandtesting.com/slow-external").as(
            "slowExternal"
        );
        cy.visit("https://practice.expandtesting.com/slow");
        cy.wait("@slowExternal").then(() => {
            cy.get(".alert-info").should(
                "have.text",
                "The slow task has finished. Thanks for waiting!"
            );
        });
    });

    it("verify with mock response", () => {
        cy.intercept(
            "GET",
            "https://practice.expandtesting.com/slow-external",
            {
                statusCode: 200,
                body: "The slow task has finished. Thanks for waiting!",
            }
        ).as("mockApi");
        cy.visit("https://practice.expandtesting.com/slow");
        cy.wait("@mockApi").then(() => {
            cy.get(".alert-info").should(
                "have.text",
                "The slow task has finished. Thanks for waiting!"
            );
        });
    });

    it.only('should display all 6 steps of the scientific method', () => {
        cy.visit('https://practice.expandtesting.com/spies-stubs-clocks');
        cy.get('#discoverScientificMethod').click();
        cy.tick(2000);
        cy.get('[data-testid=step-1]').should('be.visible').and('contain', '1. Ask a Question');
        cy.tick(2000);
        cy.get('[data-testid=step-2]').should('be.visible').and('contain', '2. Do Background Research');  
        cy.tick(2000);
        cy.get('[data-testid=step-3]').should('be.visible').and('contain', '3. Construct a Hypothesis');
        cy.tick(2000);
        cy.get('[data-testid=step-4]').should('be.visible').and('contain', '4. Test Your Hypothesis by Doing an Experiment');
        cy.tick(2000);
        cy.get('[data-testid=step-5]').should('be.visible').and('contain', '5. Analyze Your Data and Draw a Conclusion');
        cy.tick(2000);
        cy.get('[data-testid=step-6]').should('be.visible').and('contain', '6. Communicate Your Results');
    })
});
