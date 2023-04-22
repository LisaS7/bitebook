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
        case "notes":
          cy.getByAttr(`input-${key}`).type(value);
          break;
        case "category":
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
        banana.should("have.text", value);
        banana = banana.next();
      }
    }
  });
  it("can edit a food", () => {
    cy.getByAttr("edit-btn").click();
    cy.get("input").contains("TestName").clear().type("EditName");
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("EditName").should("exist");
  });
  it("can delete a food", () => {
    cy.get("td").contains("❗").should("exist");
    cy.getByAttr(`delete-${testFood.name}`).click();
  });
});
