const request = require("supertest");
const app = require("../server");
const expect = require('chai').expect;

describe('Login API', function() {
    it('Should success if credential is valid', function(done) {
        request(app)
           .post('/users')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'username', password: 'password' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});