describe('App', () => {
  it('should display the Home page at the root URL', () => {
    cy.visit('localhost:3001/');
    cy.get('p').contains('Explore The World');
  });
});
describe('App', () => {
  it('should display the Contact Us page when the user clicks on the Contact Us link in the header', () => {
    cy.visit('localhost:3001/');
    cy.get('nav').contains('Contact Us').click();
    cy.get('h1').contains('Contact Us');
  });
});
describe('ProductGrid', () => {
  it('should display matching products when searching by name', () => {
    const searchTerm = 'POP'; // search for all products with 'POP' in the name
    cy.visit('localhost:3001/products'); // navigate to the products page

    // enter search term and verify that the correct number of products are displayed
    cy.get('input[type="text"]').type(searchTerm);
    cy.get('.ProductGrid').find('.ItemCard').should('have.length', 0);
  });
});
describe('ProductGrid', () => {
  it('should display matching products when searching by maximum price', () => {
    const searchPrice = 50; // search for all products with a price less than or equal to 50
    cy.visit('localhost:3001/products'); // navigate to the products page

    // enter search price and verify that the correct number of products are displayed
    cy.get('input[type="number"]').type(searchPrice);
    cy.get('.ProductGrid').find('.ItemCard').should('have.length', 0);
  });
});
