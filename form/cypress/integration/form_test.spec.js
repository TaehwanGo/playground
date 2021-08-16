describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('change header', () => {
    cy.get('#testInputText').type('tony');
    cy.get('#testBtn').click();
    cy.wait(1000);
    cy.get('.header').contains('formTest');
  });
});
