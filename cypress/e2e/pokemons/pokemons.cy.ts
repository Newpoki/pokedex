describe("pokemons", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("localhost:3001");
  });

  it("should load the first 120 pokemons", () => {
    const pokemonsList = cy.get('[data-cy="pokemons-list"]');

    pokemonsList.find("li").its("length").should("eq", 120);
  });
});
