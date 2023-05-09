describe("Navigation", () => {
  // Variables
  const NEXT_STEP_BUTTON = "Next step";
  const GO_BACK_BUTTON = "Go Back";
  const STEP_HIGHTLIGHT = ".bg-light-blue";

  // Functions
  function ClickOnNextButtonAndVerifyIfGoBackExists() {
    for (let index = 0; index !== 3; index++) {
      cy.contains(NEXT_STEP_BUTTON).click();
      cy.contains(GO_BACK_BUTTON);

      // Verifica se existe um step em destaque
      cy.get(STEP_HIGHTLIGHT);
    }
  }

  function ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden() {
    for (let index = 0; index !== 3; index++) {
      cy.contains(GO_BACK_BUTTON).click();
      cy.get(STEP_HIGHTLIGHT);

      // Verifica se existe um step em destaque
      cy.contains(NEXT_STEP_BUTTON);
    }
  }

  context("Testing navigation", () => {
    beforeEach(() => {
      cy.viewport(1280 * 2, 720 * 2);
      cy.visit("./");
    });

    it("should show goBack button when click next button", () => {
      ClickOnNextButtonAndVerifyIfGoBackExists();
    });

    it("should hidden goBack button when step is 1", () => {
      ClickOnNextButtonAndVerifyIfGoBackExists();
      ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden();
    });
  });
});
