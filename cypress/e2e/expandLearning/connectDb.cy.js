describe("Database Testing", () => {
    it("Should connect to the database and log user data s", () => {
        cy.task("queryDatabase", 'SELECT * FROM public."User"').then(cy.log);
    });
});
