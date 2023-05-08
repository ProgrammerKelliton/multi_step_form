/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    typeForm({
      name: string,
      email: string,
      phoneNumber: number,
    }): Chainable<any>;
  }
}
