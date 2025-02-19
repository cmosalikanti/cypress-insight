it('my first test', () => {
  cy.visit('/')
  cy.contains('A/B Testing').click()
})