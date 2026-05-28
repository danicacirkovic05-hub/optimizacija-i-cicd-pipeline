const request = require("supertest");
const app = require("./app");

describe("Testiramo rute", () => {
  it("Treba da vrati status 200 i pozdravnu poruku", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello world!");
  });
});
