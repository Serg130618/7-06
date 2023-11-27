describe("SiteVisible", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });

  it("Should be enter to site", () => {
    cy.fixture("selector.json").then((selector) => {
      cy.get(selector[3].title).should("have.text", "Идёмвкино");
    });
  });
  it("Should be all week", () => {
    var date = new Date();
    var now = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][date.getDay()];
    var now2 = new Date().getDate();

    cy.fixture("selector.json").then((selector) => {
      cy.get(selector[4].week).first().should("have.text", now);
      cy.get(selector[5].day).first().should("have.text", now2);

      cy.get(selector[6].allday).should("have.length", 7);
    });
  });
});
