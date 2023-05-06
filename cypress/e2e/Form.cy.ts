const STEP_IN_HIGHTLIGHT = ".bg-light-blue";
const INPUT_PHONENUMBER = ":nth-child(3) > #input";
const GOBACK_BUTTON = "Go Back";
const NEXT_BUTTON = ".bg-marine-blue";
const LABEL_ERROR = ".text-strawberry-red";
const INPUT_EMAIL = ":nth-child(2) > #input";
const INPUT_NAME = ":nth-child(1) > #input";

function ClickOnNextButtonAndVerifyIfGoBackExists() {
  for (let index = 0; index !== 4; index++) {
    cy.get(NEXT_BUTTON).click();
    cy.contains(GOBACK_BUTTON);

    // Verifica se existe um step em destaque
    cy.get(STEP_IN_HIGHTLIGHT);
  }
}

function ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden() {
  for (let index = 0; index !== 3; index++) {
    cy.contains(GOBACK_BUTTON).click();
    cy.get(STEP_IN_HIGHTLIGHT);

    // Verifica se existe um step em destaque
    cy.get(NEXT_BUTTON);
  }
}

function VerifyIfFormIsWorking() {
  // Name input
  cy.get(INPUT_NAME).type("Kelliton Santana de Souza");

  // Email input with error
  cy.get(INPUT_EMAIL).type("name example here");
  cy.get(LABEL_ERROR);

  // Email input without error
  cy.get(INPUT_EMAIL).clear();
  cy.get(INPUT_EMAIL).type("example@gmail.com");

  // Phone number input
  cy.get(INPUT_PHONENUMBER).type("123456789");

  cy.get(NEXT_BUTTON).click();
}

function InitCypress() {
  cy.viewport(1280 * 2, 720 * 2);
  cy.visit("./");
}

describe("Next step", () => {
  it("should show goBack button when click next button and should hidden goBack button when step is 1", () => {
    InitCypress();

    ClickOnNextButtonAndVerifyIfGoBackExists();
    ClickOnGoBackButtonAndVerifyIfInStepOneItsHidden();
  });

  it("should verify if form is working", () => {
    InitCypress();

    VerifyIfFormIsWorking();
  });
});
