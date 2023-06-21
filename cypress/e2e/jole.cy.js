describe("Nuestro primer test end to end 😎", () => {
  it("check ✅", () => {
    cy.visit("http://127.0.0.1:5173");

    cy.get("h1").should("contain", "Get Premium free for 1 month");

    //
    cy.get(".btn-container").children().should("have.length", 2);
  });
});
