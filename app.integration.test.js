const request = require("supertest");
const { app } = require("./app");

describe("Integracioni Testovi - Rute", () => {
  it("Treba da vrati status 200 i pozdravnu poruku sa rute /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello world!");
  });

  it("Treba da vrati status 200 i status UP za /health rutu", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("UP");
  });

  it("Treba da vrati status 200 i fiksni rezultat 15 sa rute /saberi", async () => {
    const res = await request(app).get("/saberi");

    expect(res.statusCode).toEqual(200);
    expect(res.body.rezultat).toBe(15);
  });
});
