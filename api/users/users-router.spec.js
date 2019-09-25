const request = require("supertest");

const prepTestDB = require("../../helpers/prepTestDB.js");
const Users = require("./users-model.js");

const server = require("../server.js");
const { restricted } = require("../middleware/auth-middleware.js");
jest.mock("../middleware/auth-middleware.js");
// let token;
// const user = { email: "testing", password: "******" };

beforeEach(prepTestDB);

// beforeAll(done => {
//   request(server)
//     .post("/api/users/register")
//     .send({ ...user, name: "Tester", company: "Test", role: "tester" })
//     .then(result => {
//       request(server)
//         .post("/api/users/login")
//         .send(user)
//         .end((err, response) => {
//           token = response.body.token;
//           done();
//         });
//     });
// });

describe("users-router.js", () => {
  describe("GET /api/users", () => {
    it("responds with 200 OK", async () => {
      const res = await request(server).get("/api/users");
      // .set("Authorization", `${token}`);

      expect(res.status).toBe(200);
    });

    it("gets all users", async () => {
      const res = await request(server).get("/api/users");
      // .set("Authorization", `${token}`);

      expect(res.body).toHaveLength(2);
    });
  });

  describe("GET /api/users/:id", () => {
    it("responds with 200 OK", async () => {
      const res = await request(server).get("/api/users/1");
      // .set("Authorization", `${token}`);

      expect(res.status).toBe(200);
    });

    it("get user by id 1", async () => {
      const res = await request(server).get("/api/users/1");
      // .set("Authorization", `${token}`);
      expect(res.body).toEqual({
        company: "Tester Inc.",
        email: "test@example.com",
        id: 1,
        name: "John Smith",
        role: "tester"
      });
    });
  });

  describe("POST /api/users/", () => {
    it("responds with 400 BAD REQUEST", async () => {
      const newUser = {
        company: "Tester Inc.",
        email: "test@example.com",
        password: "test",
        name: "John Smith",
        role: "tester"
      };

      const res = await request(server)
        .post("/api/users/register")
        .send(newUser);
      // .set("Authorization", `${token}`);
      // console.log(res);
      // await request(server).get("/api/users")
      expect(res.status).toBe(400);
    });

    it("responds with 201 CREATED", async () => {
      const newUser = {
        company: "Tester Inc.",
        email: "test1@example.com",
        password: "test",
        name: "John Smith",
        role: "tester"
      };

      const res = await Users.addUser(newUser);
      // const res = await request(server)
      //   .post("/api/users/register")
      //   .send(newUser);
      // .set("Authorization", `${token}`);
      console.log(res);
      // await request(server).get("/api/users")
      // expect(res.status).toBe(201);
    });
  });
});
