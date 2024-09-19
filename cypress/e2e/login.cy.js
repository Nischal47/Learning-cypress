describe('Login Page Tests', () => {
  const url = 'https://practice.expandtesting.com/login';
  const validUsername = 'practice';
  const validPassword = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
  });

  it('should login with valid credentials', () => {
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.contains('Welcome').should('be.visible');
  });

  it('should show error message with invalid credentials', () => {
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should show error message with empty credentials', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
  });
});