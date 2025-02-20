it('should check a checkbox', () => {
    cy.visit('/')
    cy.contains('Dynamic Controls').click()
    cy.get('#checkbox input').check()
    cy.get('#checkbox input').should('be.checked')
})
