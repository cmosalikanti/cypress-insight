it('should be able to login with valid credentials', () => {
    cy.visit('/')
    cy.get('a[href="/login"]').click()
    login('tomsmith', 'SuperSecretPassword!')
    cy.get('a[class="close"]').should('be.visible')
    const logOut = 'a[href="/logout"';
    cy.get(logOut).should('be.visible')
    cy.get(logOut).click()
    cy.get('#username').should('be.visible')
})

it('should not be able to login with incorrect password', () => {
    cy.visit("/");
    cy.get('a[href="/login"]').click()
    login('tomsmith', 'SuperSecretPassword')
    cy.get('.error').should('be.visible')
})

function login(userName: string, password: string) {
    cy.get('#username').type(userName)
    cy.get('#password').type(password)
    cy.get('button[type="submit"]').click()
}