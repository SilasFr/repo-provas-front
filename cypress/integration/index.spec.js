const { default: faker } = require("@faker-js/faker");

describe("Login", () => {
  it("should sign-up and successfully", () => {
    cy.visit("http://localhost:3000");

    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.get("input[type=email]").type(user.email);
    cy.get("input[name=password").type(user.password);
    cy.get("input[name=passwordConfirmation").type(user.password);

    cy.intercept("POST", "/sign-up").as("signUp");
    cy.get("button[type=submit").click();
    cy.wait("@signUp");

    cy.url().should("equal", "http://localhost:3000/login");

    cy.contains("Cadastro efetuado com sucesso!");

    cy.get("input[type=email]").type(user.email);
    cy.get("input[type=password]").type(user.password);

    cy.intercept("POST", "/sign-in").as("signIn");
    cy.get("button[type=submit]").click();

    cy.wait("@signIn");
  });
});
