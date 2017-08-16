const request = require('supertest');

const assert = require('assert');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status and text/html content type', () => {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
    it('delivers the html file', () => {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  })
})
