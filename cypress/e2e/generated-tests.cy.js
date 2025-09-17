describe('Generated tests', () => {
  it('should visit home', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});