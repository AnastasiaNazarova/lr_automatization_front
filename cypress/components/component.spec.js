import { mount } from '@cypress/vue'
import ProductsTable from '../../src/components/ProductsTable.vue'

describe('Grid component', () => {
    it('works', () => {
        mount(ProductsTable)
        cy.contains('table').should('be.visible')
    })
})
