describe("Pick addons", () => {
  context("Testing pick addons", () => {
    beforeEach(() => {
      cy.viewport(1280 * 2, 720 * 2);
      cy.visit("./");
    });

    it("should checked the checkbox", () => {
      cy.contains("Next step").click();
      cy.contains("Next step").click();

      for (let index = 1; index != 4; index++) {
        cy.get(`:nth-child(${index}) > .gap-4 > .appearance-none`).click();
      }
    });
  });
});
