describe('DeleteProduct', () => {

    it('DeleteProduct', () => {
        cy.visit('/')

        cy.get('table tbody').contains('td','Продукт').should('be.visible')

        // cy.get('table tbody tr').should(($rows) => {
        //     //     // go through each row and confirm it shows the right information from CSV
        //     $rows.each((k, $row) => {
        //
        //         const $cells = $row.children

                // if($rows[0].contain('Продукт'))
                // {
                //     cy.wrap($rows).click()
                // }
                // if($cells[0]=='Продукт')
                // {
                //     cy.wrap($cells[6]).click()
                //     cy.server()
                //     cy.route('GET', '/product/delete',[{ id: k }]).as('deleteProduct')
                // }
                //
                //
                //         expect($cells[k])
                //             .to.have.property('innerText')
                //             .equal('Продукт')
                //
                //
          //  })
      //  })



    })
})
