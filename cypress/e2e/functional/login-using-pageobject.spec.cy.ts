import { LoginPage } from '../../page-objects/login-page';

describe('Login Page Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should load the login page', () => {
    cy.url().should('include', '/');
    cy.get('h2').should('have.text', 'Login Page');
  });

  it('should check if username input exists', () => {
    loginPage.getUsernameInput().should('be.visible');
  });

  it('should check if password input exists', () => {
    loginPage.getPasswordInput().should('be.visible');
  });

  it('should check if the submit button exists', () => {
    loginPage.getSubmitButton().should('be.visible');
  });

  it('should login with valid credentials', () => {
    loginPage.enterUsername('tomsmith');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.submitLogin();

    // Check if the login was successful, for example by checking URL or user dashboard
    cy.url().should('include', '/secure');
  });

  it('should show an error for an invalid username', () => {
    loginPage.enterUsername('wronguser');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.submitLogin();
  
    // You may expect an error message here, such as:
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should show an error for an incorrect password', () => {
    loginPage.enterUsername('tomsmith');
    loginPage.enterPassword('WrongPassword!');
    loginPage.submitLogin();
  
    // Expecting the wrong password error message to appear
    cy.contains('Your password is invalid!').should('be.visible');
  });
});
