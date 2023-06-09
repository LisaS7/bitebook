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
    cy.get("tr").its("length").should("be.gt", 30);
  });
  it("can add a new food", () => {
    cy.get("td").contains("❗").should("not.exist");
    cy.getByAttr("add-btn").click();
    for (const [key, value] of Object.entries(testFood)) {
      switch (key) {
        case "icon":
          cy.getByAttr("toggle-icon").click();
          cy.get(".epr-icn-symbols").click();
          cy.get('[data-unified="2757"] > .__EmojiPicker__').click();
          cy.getByAttr("toggle-icon").click();
          break;
        case "name":
        case "colour":
        case "flavour":
        case "texture":
          cy.getByAttr(`input-${key}`).type(value);
          break;
        case "grouping":
          cy.getByAttr(`input-${key}`).select(value);
          break;
      }
    }
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("❗").should("exist");
  });
  it("displays the properties for a food", () => {
    let banana = cy.get("td").contains("❗");
    for (const [key, value] of Object.entries(testFood)) {
      if (key) {
        banana.should("contain.text", value);
        banana = banana.next();
      }
    }
  });
  it("can edit a food", () => {
    cy.getByAttr(`edit-${testFood.name}`).click();
    const row = cy.get("input[value='TestName']").parents("tr");
    row.within(() => {
      cy.getByAttr("input-name").clear().type("EditName");
    });
    cy.getByAttr("save-btn").last().click();
    cy.contains("td", "EditName").should("exist");
    cy.contains("td", "TestName").should("not.exist");
  });
  it("can delete a food", () => {
    cy.get("td").contains("❗").should("exist");
    cy.getByAttr(`delete-EditName`).click();
    cy.get("td").contains("❗").should("not.exist");
  });
});
