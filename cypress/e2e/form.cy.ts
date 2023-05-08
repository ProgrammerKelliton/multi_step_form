describe("Form", () => {
  // Variables
  const INPUT_NAME = ":nth-child(1) > input";
  const INPUT_EMAIL = ":nth-child(2) > input";
  const INPUT_PHONE_NUMBER = ":nth-child(3) > input";
  const STEP_HIGHTLIGHT = ".text-strawberry-red";

  // Functions
  function VerifyIfFormIsWorking() {
    // Name input
    cy.get(INPUT_NAME).type("example");

    // Email input with error
    cy.get(INPUT_EMAIL).type("name example here");
    cy.get(STEP_HIGHTLIGHT);

    // Email input without error
    cy.get(INPUT_EMAIL).clear();
    cy.get(INPUT_EMAIL).type("example@gmail.com");

    // Phone number input
    cy.get(INPUT_PHONE_NUMBER).type("123456789");
  }

  context("Testing form", () => {
    beforeEach(() => {
      cy.viewport(1280 * 2, 720 * 2);
      cy.visit("./");
    });

    it("should verify if form is working", () => {
      VerifyIfFormIsWorking();
    });
  });
});
