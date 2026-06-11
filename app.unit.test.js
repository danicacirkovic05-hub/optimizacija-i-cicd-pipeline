const { saberi } = require("./app");

describe("Unit Test - Matematika", () => {
  it("Treba pravilno da sabere fiksne vrednosti 5 i 10", () => {
    const rezultat = saberi(5, 10);
    expect(rezultat).toBe(15);
  });
});
