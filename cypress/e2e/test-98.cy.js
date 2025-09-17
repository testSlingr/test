describe('Feature: Login', () => {
  it('Scenario: Successful login', () => {
    cy.visit('http://localhost:3000');
    
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('1234');
      cy.contains('button','Login').click();
    
    cy.contains('Testing Platform');
  });
});