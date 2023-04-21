import { userRegistrationDetails } from "../../fixtures/constants";

describe("Test registration", () => {
  beforeEach(() => {
    cy.logout();
    cy.visit("/register");
    cy.url().should("contain", "/register");
  });
  after(() => {
    cy.get('[data-cy="nav-profile"]').click();
    cy.url().should("contain", "/profile");
    cy.get('[data-cy="delete-user"]').click();
    cy.url().should("contain", "/");
  });

  it("allows a user to register via the form and redirects to the home page", () => {
    cy.get('[data-cy="name"]').type(userRegistrationDetails.name);
    cy.get('[data-cy="email"]').type(userRegistrationDetails.email);
    cy.get('[data-cy="pw"]').type(userRegistrationDetails.pw);
    cy.get('[data-cy="submit-reg"]').click();
    cy.url().should("contain", "/home");
  });

  // Did not test register with Google because
  // 1. The Cypress testing browser doesn't allow google auth.
  // 2. Nothing was added beyond Firebase's ootb functionality.
});
