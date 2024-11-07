describe("verify input fields", { tags: "critical" }, () => {
    it("verify download file", () => {
        const filePath = "cypress/downloads/1729191869639_sample.txt";
        const downloadFolder = "cypress/downloads/";
        cy.task("deleteFile", downloadFolder);
        cy.visit("https://practice.expandtesting.com/download");
        cy.contains("1729191869639_sample.txt")
            .click()
            .then(() => {
                cy.wait(3000);
                cy.readFile(filePath).should("exist");
            });
    });
});
