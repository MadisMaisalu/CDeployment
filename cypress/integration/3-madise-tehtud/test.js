describe('Entering the page', () => {
    it('Opens the page', () => {
        cy.visit('localhost:3000')
        cy.visit('localhost:3000')
        cy.contains('Vali vasakust menüüst sobiv element')
    })
})

describe('Sidebar', () => {
    it('Checks that all functionalities in sidebar work', () => {
        cy.contains('TElementDocXML').click()
        cy.contains('QS_GetItemValue')
        cy.contains('InputBox')

        cy.contains('SEADISTUS').click()
        cy.get('#keywordSize').should('be.visible')
        cy.get('#codeSize').should('be.visible')
        cy.get('#closeSettings').click()


        cy.contains('ABI').click()
        cy.contains('See on NOOM tarkvara dokumentatsiooni lehekülg. Siit leiad arenduse jaoks vajalikku informatsiooni.').should('be.visible')
        cy.get('#closeHelp').click()

        cy.get('#search').type('TElementDocXML')
        cy.contains('TElementDocXML').should('be.visible')

        cy.get('#btn').click()
        cy.get('#sidebar').should('be.visible')
    })
})


describe('Main', () => {
    it('Checking main insertions', () => {
        cy.get('h2').should('be.visible')
        cy.get('.exampleTitle:first').click()
        cy.get('.exampleContent:first').should('be.not.visible')

        cy.get('#general').should('not.have.class', 'dark')
        cy.get('#colorMode').click()
        cy.get('#general').should('have.class', 'dark')

        cy.get('#addUpdate').check()
        cy.get('#addContentEditor').type('Madis')
        cy.get('#addContentText').type('See on test')
        cy.get('#submitNewContent').click()
        cy.get('#successMessage').should('be.visible')

    })
})

