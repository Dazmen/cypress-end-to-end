
context('Form Inputs', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    });

    it('adding text to inputs and submit form', () => {
        cy.get("[data-cy=name-input]")
            .type('Laughn')
            .should('have.value', 'Laughn')

        const email = 'example@example.com'
        cy.get("[data-cy=email-input]")
            .type(email)
            .should('have.value', email)

        const motivationText = 'to catch them all'
        cy.get("[data-cy=motivation-input]")
            .type(motivationText)
            .should('have.value', motivationText)

        cy.get('[data-cy=positions]')
            .select('Newsletter')
            .should('have.value', 'Newsletter')

        cy.get('[data-cy=tos]')
            .check()
            .should('be.checked')

        cy.get('[data-cy=submit-button]')
            .click()
    });

    // it('', () => {
        
    // });
})