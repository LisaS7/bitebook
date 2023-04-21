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
