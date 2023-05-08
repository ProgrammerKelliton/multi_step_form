Cypress.Commands.add("typeForm", ({ name, email, phoneNumber }) => {
  // Variables
  const INPUT_NAME = ":nth-child(1) > input";
  const INPUT_EMAIL = ":nth-child(2) > input";
  const INPUT_PHONE_NUMBER = ":nth-child(3) > input";

  cy.get(INPUT_NAME).type(name);
  cy.get(INPUT_NAME).should("have.value", name);

  cy.get(INPUT_EMAIL).type(email);
  cy.get(INPUT_EMAIL).should("have.value", email);

  cy.get(INPUT_PHONE_NUMBER).type(phoneNumber);
  cy.get(INPUT_PHONE_NUMBER).should("have.value", phoneNumber);
});

describe("Form", () => {
  context("Testing form", () => {
    beforeEach(() => {
      cy.viewport(1280 * 2, 720 * 2);
      cy.visit("./");
    });

    it("should verify if form is working", () => {
      cy.typeForm({
        name: "example",
        email: "example@gmail.com",
        phoneNumber: 3213463546,
      });
    });
  });
});
