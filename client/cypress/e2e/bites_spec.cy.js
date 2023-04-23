import { userLoginDetails, testBite } from "../fixtures/constants";

describe("Tests for bites route", () => {
  before(() => {
    cy.logout();
    cy.login({ email: userLoginDetails.email, pw: userLoginDetails.pw });
    cy.visit("/bites");
    cy.wait(1000);
    // delete any residual records
    if (cy.get("tr").its("length") > 1) {
      cy.getByAttr("delete-btn").should("be.visible").click({ multiple: true });
    }
    cy.get("tr").its("length").should("eq", 1); // header row
    // post test data
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
  after(() => {
    cy.visit("/bites");
    cy.wait(1000);
    cy.getByAttr("delete-btn").should("be.visible").click({ multiple: true });
    cy.get("tr").its("length").should("eq", 1); // header row
  });

  it("displays bites list", () => {
    cy.get("tr").its("length").should("eq", 4); // 3 dummy entries + header row
  });
  it("can add a new bite", () => {
    cy.get("td").contains("TestBite").should("not.exist");
    cy.getByAttr("add-btn").click();
    for (const [key, value] of Object.entries(testBite)) {
      switch (key) {
        case "date":
          cy.getByAttr("input-date").click();
          break;
        case "notes":
          cy.getByAttr(`input-${key}`).type(value);
          break;
        case "food":
          cy.getByAttr(`input-${key}`).select(value);
          break;
        case "rating":
          cy.get('[data-cy="rating4"]').click();
          break;
      }
    }
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("TestBite").should("exist");
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
    cy.get("td").contains("TestBite").should("exist");
    cy.getByAttr(`delete-undefined`).click();
    cy.get("td").contains("TestBite").should("not.exist");
  });
});
