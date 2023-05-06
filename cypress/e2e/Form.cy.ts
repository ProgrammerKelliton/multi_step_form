const BACKGROUND_STEP_IN_HIGHTLIGHT = ".bg-light-blue";
const BACKGROUND_NEXT_BUTTON = ".bg-marine-blue";
const TEXT_GOBACK_BUTTON = "Go Back";

function ClickOnNextButtonAndVerifyIfGoBackExists() {
  for (let index = 0; index !== 4; index++) {
    cy.get(BACKGROUND_NEXT_BUTTON).click();
    cy.contains(TEXT_GOBACK_BUTTON);

    // Verifica se existe um step em destaque
    cy.get(BACKGROUND_STEP_IN_HIGHTLIGHT);
  }
}

function ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden() {
  for (let index = 0; index !== 3; index++) {
    cy.contains(TEXT_GOBACK_BUTTON).click();
    cy.get(BACKGROUND_STEP_IN_HIGHTLIGHT);

    // Verifica se existe um step em destaque
    cy.get(BACKGROUND_NEXT_BUTTON);
  }
}

function VerifyIfFormIsWorking() {
  // Name input
  cy.get(":nth-child(1) > #input").type("Kelliton Santana de Souza");

  // Email input with error
  cy.get(":nth-child(2) > #input").type("name example here");
  cy.get(".text-strawberry-red");

  // Email input without error
  cy.get(":nth-child(2) > #input").clear();
  cy.get(":nth-child(2) > #input").type("example@gmail.com");

  // Phone number input
  cy.get(":nth-child(3) > #input").type("123456789");

  cy.get(BACKGROUND_NEXT_BUTTON).click();
}

function InitCypress() {
  cy.viewport(1280 * 2, 720 * 2);
  cy.visit("./");
}

describe("Next step", () => {
  it("should show goBack button when click next button and should hidden goBack when step is 1", () => {
    InitCypress();

    ClickOnNextButtonAndVerifyIfGoBackExists();
    ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden();
  });

  it("should to detect error in fields", () => {
    InitCypress();

    VerifyIfFormIsWorking();
  });
});
