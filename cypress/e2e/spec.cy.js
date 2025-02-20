it('my first test', () => {
  cy.visit('/')
  cy.get(':nth-child(1) > a')
})