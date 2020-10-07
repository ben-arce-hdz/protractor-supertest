let supertest = require("supertest");
var expect = require("chai").expect;
let endPoint = require('../config/endpoints.json');
var request = supertest.agent(endPoint.URLBase);

describe("/GET - JSON API", function () {
  let res;

  before(async function () {
    res = await request.get(endPoint.user);
  });

  it("Test to verify a http status code", async function () {
    console.log(1)
    expect(res.status).to.equal(200)
  });

  it("Test to verify a http response header", async function () {
    console.log(2)
    expect(res.headers).to.have.property("content-type");
    expect(res.headers["content-type"]).to.equal("application/json; charset=utf-8");
  });

  it("test to verify a http response body", async function () {
    console.log(3)
    expect(res.body).to.have.lengthOf(10);
  });
});