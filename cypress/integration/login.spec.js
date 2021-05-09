import user from "../fixtures/userInfo.json"

describe('log in testsuit',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
    })
    it('successfully login with correct credentials',()=>{
        cy.login(user)
    })
    it('login attempt fails with wrong username',()=>{
        cy.submitLogin(user.wrongUsername,user.password)
        cy.url().should('contain','login')
        cy.contains('h1','Error!')
    })  
    it('login attempt fails with wrong password',()=>{
        cy.submitLogin(user.userName,user.wrongPassword)
        cy.url().should('contain','login')
        cy.contains('h1','Error!')
    })      
})