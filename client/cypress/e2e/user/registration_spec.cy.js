import { userRegistrationDetails } from "../../fixtures/constants";

describe("Test registration", () => {
  beforeEach(() => {
    cy.logout();
    cy.visit("/register");
    cy.url().should("contain", "/register");
  });
  after(() => {
    cy.getByAttr("nav-profile").click();
    cy.url().should("contain", "/profile");
    cy.getByAttr("delete-user").click();
    cy.url().should("contain", "/");
  });

  it("allows a user to register via the form and redirects to the home page", () => {
    cy.getByAttr("name").type(userRegistrationDetails.name);
    cy.getByAttr("email").type(userRegistrationDetails.email);
    cy.getByAttr("pw").type(userRegistrationDetails.pw);
    cy.getByAttr("submit-reg").click();
    cy.url().should("contain", "/home");
  });

  // Did not test register with Google because
  // 1. The Cypress testing browser doesn't allow google auth.
  // 2. Nothing was added beyond Firebase's ootb functionality.
});
