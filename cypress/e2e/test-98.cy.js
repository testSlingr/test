describe('Generated tests after changes made', () => {
  it('should visit home', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});