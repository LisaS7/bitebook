import { userLoginDetails, testBite } from "../fixtures/constants";

describe("Tests for bites route", () => {
  before(() => {
    cy.logout();
    cy.login({ email: userLoginDetails.email, pw: userLoginDetails.pw });
    cy.fixture("test_bites")
      .as("testData")
      .each((item) =>
        cy.request({
          method: "POST",
          url: "http://localhost:8080/api/bites",
          body: item,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        })
      );
  });

  beforeEach(() => {
    cy.visit("/bites");
    cy.url().should("contain", "/bites");
    cy.wait(1000);
  });
  it("displays bites list", () => {
    // cy.get("tr").its("length").should("eq", 3);
  });
  it.skip("can add a new bite", () => {
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
  it.skip("displays the properties for a bite", () => {
    let banana = cy.get("td").contains("❗");
    for (const [key, value] of Object.entries(testFood)) {
      if (key) {
        banana.should("have.text", value);
        banana = banana.next();
      }
    }
  });
  it.skip("can edit a bite", () => {
    cy.getByAttr("edit-btn").click();
    cy.get("input").contains("TestName").clear().type("EditName");
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("EditName").should("exist");
  });
  it.skip("can delete a bite", () => {
    cy.get("td").contains("❗").should("exist");
    cy.getByAttr(`delete-${testFood.name}`).click();
  });
});
