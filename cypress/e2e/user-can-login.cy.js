describe('User Can Login To System', () => {
  //positive test case
  it.only('user can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')
    
    //act
    cy.get('[data-id="email"]').type("superadmin@gmail.com")
    cy.get('[data-id="password"]').type("password")
    cy.get('[data-id="submit"]').click()
    // cy.get('[data-id="username"]').click()
    // cy.get('[data-id="logout-btn"]').click()

    //assert
    cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin')
  })

  //negative test case
  it('user cannot login with valid username and wrong password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    //act
    cy.get('[data-id="email"]').type("superadmin@gmail.com")
    cy.get('[data-id="password"]').type("password-salah")
    cy.get('[data-id="submit"]').click()

    //assert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  })

  it('user cannot login with wrong username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    //act
    cy.get('[data-id="email"]').type("superadminsalah@gmail.com")
    cy.get('[data-id="password"]').type("password")
    cy.get('[data-id="submit"]').click()

    //assert
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  })

  it('user cannot login with empty username and valid password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    //act
    cy.get('[data-id="password"]').type("password")
    cy.get('[data-id="submit"]').click()

    //assert
    cy.get('.invalid-feedback').should('have.text', 'The email field is required.')
  })

  it('user cannot login with valid username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    //act
    cy.get('[data-id="email"]').type("superadmin@gmail.com")
    cy.get('[data-id="submit"]').click()

    //assert
    cy.get('.invalid-feedback').should('have.text', 'The password field is required.')
  })

  //quiz di vid 13
  it('user cannot login with empty username and empty password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')

    //act
    cy.get('[data-id="submit"]').click()

    // Assert
    cy.get('.invalid-feedback').eq(0).should('have.text', 'The email field is required.')
    cy.get('.invalid-feedback').eq(1).should('have.text', 'The password field is required.')
  })
})