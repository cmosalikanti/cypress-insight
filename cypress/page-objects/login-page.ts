export class LoginPage {
    private usernameInput = '#username';
    private passwordInput = '#password';
    private submitButton = '.radius';
  
    public visit() {
      cy.visit('/login');
    }
  
    public enterUsername(username: string) {
      cy.get(this.usernameInput).type(username);
    }
  
    public enterPassword(password: string) {
      cy.get(this.passwordInput).type(password);
    }
  
    public submitLogin() {
      cy.get(this.submitButton).click();
    }
  
    public getUsernameInput() {
      return cy.get(this.usernameInput);
    }
  
    public getPasswordInput() {
      return cy.get(this.passwordInput);
    }
  
    public getSubmitButton() {
      return cy.get(this.submitButton);
    }
  }
  