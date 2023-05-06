context("Select plan", () => {
  // Variables
  const NEXT_STEP_BUTTON = "Next step";
  const TOOGLE_BUTTON = ".appearance-none";

  // functions
  function ClickOnPlans() {
    cy.contains("Arcade").click();
    cy.contains("Advanced").click();
    cy.contains("Pro").click();
  }

  describe("Testing select plan", () => {
    beforeEach(() => {
      cy.viewport(1280 * 2, 720 * 2);
      cy.visit("./");
      cy.contains(NEXT_STEP_BUTTON).click();
    });

    it("should change color when click in plan", () => {
      ClickOnPlans();

      cy.get(TOOGLE_BUTTON).click();

      ClickOnPlans();
    });
  });
});
