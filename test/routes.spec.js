process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');
var knex = require('../db/knex');


chai.use(chaiHttp);

describe('API Routes', function () {

    // beforeEach( done => {
    //   knex.migrate.rollback()
    //     .then(() => {
    //       knex.migrate.latest()
    //         .then(() => {
    //           return knex.seed.run()
    //             .then(() => {
    //               done();
    //             });
    //         });
    //     });
    // });
  
  describe('GET /api/v1/groups', () => {
    it('should return all the groups', done => {
      chai.request(server)
        .get('/api/v1/groups')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(7);
          response.body[0].should.have.property('id');
          response.body[0].should.have.property('group_name');
          response.body[0].should.have.property('breed_count');
          response.body[0].should.have.property('breed_description');
          response.body[0].id.should.equal(1);
          response.body[0].group_name.should.equal('Hound');
          response.body[0].breed_count.should.equal('51');
          done();
        });
    });
  });




});