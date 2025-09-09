describe('Feature: Login', () => { 
    it('Scenario: Successful login', () => { 
        cy.visit('https://testingplatform.tarzan.io/dev/runtime/'); 
        cy.get('input[id="email"]').type('admin@test.com'); 
        cy.get('input[id="password"]').type('Omzbex7TA6aFkIvrF9j4zZw'); 
        cy.contains('button','Log In').click(); 
        cy.contains('Testing Platform'); 
    }); 
});