describe("should verify opening new tab", () => {
    it("should open new tab", () => {
        cy.visit("https://practice.expandtesting.com/windows");
        cy.get("div.row>a").invoke("removeAttr", "target").click();
        cy.get("h1").should(
            "have.text",
            "Example of a new window page for Automation Testing Practice"
        );
    });

    it('programmatically visits the new tab URL', () => {
        cy.visit('https://practice.expandtesting.com/windows');
    
        // Extract the URL from the link
        cy.get("div.row>a").then((link) => {
            const url = link.prop('href');
            cy.visit(url);  // Programmatically visit the new tab URL
        });
    
        // Verify the new page
        cy.get("h1").should(
            "have.text",
            "Example of a new window page for Automation Testing Practice"
        );
    });
});
