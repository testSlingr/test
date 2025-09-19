describe('Feature: Login', () => {
  it('Scenario: Successful login as Admin', () => {
    cy.visit('https://testingplatform.tarzan.io/dev/runtime/');
    
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('1234');
      cy.contains('button','Login').click();
    
    cy.contains('Testing Platform');
  });
});

describe('Feature: Login as Admin', () => {
  it('Scenario: Successful login as user', () => {
    cy.visit('https://testingplatform.tarzan.io/dev/runtime/');
    
      cy.get('input[name="username"]').type('userQA');
      cy.get('input[name="password"]').type('1234');
      cy.contains('button','Login').click();
    
    cy.contains('Testing Platform');
  });
});

