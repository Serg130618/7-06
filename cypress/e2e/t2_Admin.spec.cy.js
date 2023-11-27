describe("PositiveTest1", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/");
  });

  it("Should'n be login as Admin", () => {
    cy.fixture("selector.json").then((selector) => {
      cy.fixture("login.json").then((loginAdm) => {
        cy.get(selector[1].login).type(loginAdm[1].login);
        cy.get(selector[2].pass).type(loginAdm[1].pass);
      });

      cy.get(selector[0].loginButton).click();
    });

    cy.contains("Ошибка авторизации!").should("be.visible");
  });
  it("Should be login as Admin", () => {
    cy.fixture("selector.json").then((selector) => {
      cy.fixture("login.json").then((loginAdm) => {
        cy.get(selector[1].login).type(loginAdm[0].login);
        cy.get(selector[2].pass).type(loginAdm[0].pass);
        // cy.screenshot();
      });
      cy.get(selector[0].loginButton).click();
    });

    cy.contains("Администраторррская").should("be.visible");
    // cy.get("Highlights").should("be.visible");
  });

  it("Should be empty login as Admin", () => {
    cy.fixture("selector.json").then((selector) => {
      cy.get(selector[0].loginButton).click();
    });
  });
});
