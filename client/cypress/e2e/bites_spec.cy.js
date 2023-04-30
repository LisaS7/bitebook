import {
  userLoginDetails,
  testBite,
  formattedDate,
} from "../fixtures/constants";

describe("Tests for bites route", () => {
  before(() => {
    cy.logout();
    cy.login({ email: userLoginDetails.email, pw: userLoginDetails.pw });
    cy.visit("/bites");
    cy.wait(1000);
    // delete any residual records
    cy.get("tr")
      .its("length")
      .then((length) => {
        if (length > 1) {
          cy.getByAttr("delete-btn")
            .should("be.visible")
            .click({ multiple: true });
        }
      });
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
        case "notes":
          cy.getByAttr(`input-${key}`).type(value);
          break;
        case "person":
        case "food":
          cy.getByAttr(`input-${key}`).select(value);
          break;
        case "rating":
          cy.getByAttr("rating4").click();
          break;
      }
    }
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("TestBite").should("exist");
  });
  it("displays the properties for a bite", () => {
    let banana = cy.get("td").contains(formattedDate);
    for (const [key, value] of Object.entries(testBite)) {
      if (key === "rating") {
        banana.should("have.text", "🟢🟢🟢🟢🟢");
        banana = banana.next();
      } else {
        banana.should("contain.text", value);
        banana = banana.next();
      }
    }
  });
  it("can edit a bite", () => {
    cy.get(
      '[data-cy="edit-2023-01-02"] > [data-cy="edit-btn"] > .material-symbols-outlined'
    ).click();

    // not testing date change as Cypress doesn't recognise date widget
    cy.getByAttr("input-food").select("Strawberry");
    cy.getByAttr("rating3").click();
    cy.getByAttr("input-notes").clear().type("EditBite");
    cy.getByAttr("save-btn").click();
    cy.get("td").contains("Strawberry").should("exist");
    cy.get("td").contains("EditBite").should("exist");
  });
  it("can delete a bite", () => {
    cy.get("td").contains("Orange").should("exist");
    cy.getByAttr(`delete-btn`).first().click();
    cy.get("td").contains("Orange").should("not.exist");
  });
});
