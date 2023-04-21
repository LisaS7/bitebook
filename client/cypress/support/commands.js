// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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
  cy.wait(3000);
  cy.url().then((url) => {
    if (url.includes("/home")) {
      cy.get('[data-cy="nav-logout"]').click();
      //   Cypress.session.clearAllSavedSessions();
    }
  });
});
