import { userRegistrationDetails } from "../fixtures/constants";
// import { auth } from "../../src/firebase";
// import { deleteUser } from "firebase/auth";

describe("Test registration", () => {
  before(() => {
    cy.logout();
  });
  beforeEach(() => {
    cy.visit("/register");
    cy.url().should("contain", "/register");
  });
  after(() => {
    // Doesn't work - auth.currentUser is null
    //
    // console.log("clone auth", { ...auth });
    // console.log("auth", auth);
    // console.log(auth.currentUser);
    // deleteUser(auth.currentUser)
    //   .then(() => {
    //     console.log("Test user deleted: ", auth.currentUser.uid);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
});
