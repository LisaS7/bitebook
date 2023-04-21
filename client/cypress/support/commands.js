Cypress.Commands.add("login", ({ email, pw }) => {
  cy.session("user", () => {
    cy.visit("/");
    cy.wait(3000);
    cy.url().then((url) => {
      if (!url.includes("/home")) {
        cy.get('[type="text"]').type(email);
        cy.get('[type="password"]').type(pw);
        cy.get('[data-cy="login-button"]').click();
        cy.url().should("contain", "/home");
      }
    });
  });
});

Cypress.Commands.add("logout", () => {
  cy.visit("/home");
  cy.wait(1000);
  cy.url().then((url) => {
    if (url.includes("/home")) {
      console.log("logging out ", url);
      cy.get('[data-cy="nav-logout"]').click();
      cy.url().should("eq", Cypress.config().baseUrl);
    }
  });
});
