describe('react redux testing', () => {
  it('validate react app with redux', () => {
    cy.visit('http://localhost:3000')

    // INCREMENT VALUE BY 1
    cy.findByTestId('#plus').click();
    cy.findByRole('display-counter').should('have.text', '1')

    // DECREMENT VALUE BY 1
    cy.findByTestId('#minus').click();
    cy.findByRole('display-counter').should('have.text', '0')

    // RESET AND TYPE VALUE 10 TO INPUT FIELD
    cy.findAllByTestId('incr-value').clear();
    cy.findAllByTestId('incr-value').type(10);

    // INCREMENT VALUE TO 10
    cy.findByTestId('#incr-amt').click();
    cy.findByRole('display-counter').should('have.text', '10')
  })
})