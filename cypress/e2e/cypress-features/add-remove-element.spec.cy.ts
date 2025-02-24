it('should be able to add an element', () => {
    cy.visit('/')
    cy.contains('Add/Remove Elements').click();
    cy.get('#content h3').should('have.text', 'Add/Remove Elements')
    cy.get('button').click();
    cy.get('button.added-manually').should('be.visible')
    cy.get('button.added-manually').click();
    cy.get('button.added-manually').should('not.exist')
    cy.get('.example').get('button').should('be.visible')
})