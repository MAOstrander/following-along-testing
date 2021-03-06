'use strict';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../../../app');

describe('routes', () => {
  describe('/user/:id', () => {
    // let server;

    // beforeEach( (done) => {
    //   server = app.listen(process.env.PORT || 7357, (err) => {
    //     console.log(`listening on ${server.address().port}`);
    //   })
    // })

    // afterEach( (done) => {
    //   server.close(done);
    // })
    it('returns a 400 if no :id is included', (done) => {
      request(app)
      .get('/user')
      .expect(400)
      .end( (err, res) => {
        if (err) throw err;
        console.log(res);
        done();
      })
    })
  })
})
