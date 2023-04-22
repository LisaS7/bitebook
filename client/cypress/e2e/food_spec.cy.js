import { userLoginDetails, testFood } from "../fixtures/constants";

describe("Tests for foods route", () => {
  before(() => {
    cy.logout();
    cy.login({ email: userLoginDetails.email, pw: userLoginDetails.pw });
  });
  beforeEach(() => {
    cy.visit("/foods");
    cy.url().should("contain", "/foods");
    cy.wait(1000);
  });
  it("displays food list", () => {
    cy.get("tr").its("length").should("be.gt", 20);
  });
  it("displays the properties for a food", () => {
    let banana = cy.get("td").contains("🍌");
    for (const [key, value] of Object.entries(testFood)) {
      if (key) {
        console.log(banana);
        banana.should("have.text", value);
        banana = banana.next();
        // bananaRow.getByAttr(key).should("have.value", value);
      }
    }
  });
});
