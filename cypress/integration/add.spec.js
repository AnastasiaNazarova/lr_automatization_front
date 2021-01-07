describe('AddProduct', () => {

    it('AddProduct', () => {
        cy.visit('/')
        cy.get('#addProductBtn').click();
        cy.url().should('include', '/add')
        cy.get('#nameProduct')
            .type('Продукт')
        cy.get('#purchasePrice')
           .type('100')
        cy.get('#number')
            .type('10')
        cy.get('#markup')
            .type('10')
        cy.get('#shelfLife')
            .type('8')
        cy.get('#comment')
            .type('комментарий')
        cy.server()
        cy.route('POST', '/product/add').as('addProduct')
        cy.get('#submit').click();
        })
})




