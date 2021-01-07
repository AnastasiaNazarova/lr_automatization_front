describe('FilterProduct', () => {

    it('FilterProduct', () => {
        cy.visit('/')
        cy.get('#nameProductTxt')
            .type('П')
        cy.get('#purchasePriceTxt')
             .type('10')
        cy.get('#markupTxt')
            .type('10')

    })
})
