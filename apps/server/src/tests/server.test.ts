import supertest from "supertest";
import { expect, describe, it } from "vitest";
import { createServer } from "../server";

describe("server", () => {
  it("health check returns Hello, world!", async () => {
    await supertest(createServer())
      .get("/api")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual("Hello, world!");
      });
  });
});
