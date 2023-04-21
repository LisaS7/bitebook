import { userLoginDetails } from "../../fixtures/constants";

describe("Test logged in", () => {
  beforeEach(() => {
    cy.login({ email: userLoginDetails.email, pw: userLoginDetails.pw });
    cy.visit("/");
  });

  it("allows a user to log in and redirects to the home page", () => {
    cy.visit("/");
    cy.url().should("contain", "/home");
  });

  // Did not test sign in with Google because
  // 1. The Cypress testing browser doesn't allow google auth.
  // 2. Nothing was added beyond Firebase's ootb functionality.
});

describe("Test logged out", () => {
  beforeEach(() => {
    cy.logout();
    cy.visit("/");
    cy.url().should("eq", Cypress.config().baseUrl);
  });

  it("redirects to login page when user is not logged in", () => {
    cy.url().should("not.contain", "/home");
    cy.get('[data-cy="foods-link"]').click();
    cy.url().should("not.contain", "/foods");
  });
});
