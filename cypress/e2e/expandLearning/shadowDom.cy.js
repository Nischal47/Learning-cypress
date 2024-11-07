describe("Shadow DOM Testing on ExpandTesting", () => {
    beforeEach(() => {
        cy.visit("https://practice.expandtesting.com/shadowdom");
    });

    it("should verify message inside shadow dom button", () => {
        cy.get("#shadow-host")
            .shadow()
            .find("button")
            .should("have.text", "This button is inside a Shadow DOM.");
    });

    it("should click button inside shadow dom", () => {
        cy.get("#shadow-host").shadow().find("button").click();
    });
});
