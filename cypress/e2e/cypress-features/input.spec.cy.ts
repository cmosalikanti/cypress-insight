it('should be able to input', () => {
    cy.visit('/')
    cy.contains('Inputs').click();
    cy.get('input').type('1');
})