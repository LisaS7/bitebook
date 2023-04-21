describe("User can access home page after login", () => {
  before(() => {
    cy.login({ email: "test@test.com", pw: "test123" });
  });
  it("redirects to home page when user is logged in", () => {
    cy.visit("/");
    cy.url().should("contain", "/home");
  });
});
