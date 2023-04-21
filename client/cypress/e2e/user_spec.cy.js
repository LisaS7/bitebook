import { userDetails } from "../fixtures/constants";

describe("Test registration", () => {
  before(() => {
    cy.logout();
  });
  beforeEach(() => {
    cy.visit("/register");
    cy.url().should("contain", "/register");
  });

  //   it("displays the Register link on the navbar when user is not logged in", () => {cy.get('[data-cy="nav-register"]').click();});

  it("allows a user to register via the form", () => {
    cy.get('[data-cy="name"]').type(userDetails.name);
    cy.get('[data-cy="email"]').type(userDetails.email);
    cy.get('[data-cy="pw"]').type(userDetails.pw);
  });
});

describe("Test user authentication and profile", () => {
  before(() => {
    cy.logout();
  });
  beforeEach(() => {
    cy.visit("/");
  });
  it("redirects to login page when user is not logged in", () => {
    cy.url().should("not.contain", "/home");
  });
  it("cannot access the Foods page without a logged in user", () => {
    cy.get('[data-cy="foods-link"]').click();
    cy.url().should("not.contain", "/foods");
  });
  it("allows a new user to register", () => {});
  //   it("allows the user to log in", () => {
  //     cy.login
  //     cy.url().should("contain", "/home");
  //   });
});

// displays correct nav buttons
// forgot password
// sign up here link
