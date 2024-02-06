const request = require("supertest");
const app = require("./app");
  
describe("GET /api/movies/:id", () => {

  it("Pour id 1, le test vérifie le statut réponse 200", async () => {
    const response = await request(app).get('/api/movies/1');
    expect(response.status).toEqual(200);
  });

  it("Pour id 1, le test vérifie le format de réponse en json", async () => {
    const response = await request(app).get('/api/movies/1');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it("Pour id 0, le test vérifie le status de réponse 404 (Not Found)", async () => {
    const response = await request(app).get('/api/movies/0');
    expect(response.status).toEqual(404);
  });
});
