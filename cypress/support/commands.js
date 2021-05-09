Cypress.Commands.add('submitLogin',(username,password)=>{
    cy.get('form').within(($form)=>{
        cy.get('input[name = username]').type(username)
        cy.get('input[type = password]').type(password)
        cy.root().submit()
    })
})
Cypress.Commands.add('login',(user)=>{
    cy.get('form').within(($form)=>{
        cy.get('input[name = username]').type(user.userName)
        cy.get('input[type = password]').type(user.password)
        cy.root().submit()
    })
    cy.title().should('eq','ParaBank | Accounts Overview')
    cy.url().should('contain','overview')
    cy.contains('Accounts Overview')
})