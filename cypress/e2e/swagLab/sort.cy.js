import { SwagLab } from "../../pages/swag-lab.cy"

describe("Sort Products", () => {
    const swagLab = new SwagLab();

    beforeEach(() => {
        cy.fixture("swag-lab").then((data) => {
            const { username, password, websiteUrl } = data;
            cy.visit(websiteUrl);
            swagLab.login(username, password);
        });
    });

    afterEach(() => {
        swagLab.logout();
    });

    // it("should check if login works", () => {
    //     cy.url().should("include", "inventory.html");
    // })

    it("should sort products by name in accending order", () => {
        swagLab.sortProducts();
    })

    it("should sort products by name in decending order", () => {
    })

    it("should sort products by price in accending order", () => {
    })

    it("should sort products by price in decending order", () => {
    })
})