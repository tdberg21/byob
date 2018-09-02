process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');
var knex = require('../db/knex');


chai.use(chaiHttp);

describe('API Routes', function () {

    beforeEach( done => {
      knex.migrate.rollback()
        .then(() => {
          knex.migrate.latest()
            .then(() => {
              return knex.seed.run()
                .then(() => {
                  done();
                });
            });
        });
    });
  
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

  describe('GET /api/v1/breeds', () => {
    it('should return all the breeds', done => {
      chai.request(server)
        .get('/api/v1/breeds')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(217);
          response.body[0].should.have.property('id');
          response.body[0].should.have.property('breed_name');
          response.body[0].should.have.property('life_span');
          response.body[0].should.have.property('bred_for');
          response.body[0].should.have.property('temperament');
          response.body[0].should.have.property('weight');
          response.body[0].should.have.property('height');
          response.body[0].should.have.property('group_id');
          response.body[0].id.should.equal(1);
          response.body[0].breed_name.should.equal('Affenpinscher');
          response.body[0].life_span.should.equal('10 - 12 years');
          response.body[0].bred_for.should.equal('Small rodent hunting, lapdog');
          response.body[0].temperament.should.equal('Stubborn, Curious, Playful, Adventurous, Active, Fun-loving');
          response.body[0].group_id.should.equal(1);
          done();
        });
    });
  });

  describe('GET /api/v1/groups/:id', () => {
    it('should return a specific group', done => {
      chai.request(server)
        .get('/api/v1/groups/1')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('group');
          response.body.group.should.be.a('array');
          response.body.group[0].should.be.a('object');
          response.body.group[0].should.have.property('id');
          response.body.group[0].should.have.property('group_name');
          response.body.group[0].should.have.property('breed_count')
          response.body.group[0].should.have.property('breed_description');
          response.body.group[0].id.should.equal(1);
          response.body.group[0].group_name.should.equal('Hound');
          response.body.group[0].breed_count.should.equal('51');
          done();
        });
    });

    it('should not return a group if it doesnt exist', done => {
      chai.request(server)
        .get('/api/v1/groups/236')
        .end((error, response) => {
          console.log(response.body)
          response.should.have.status(404);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('error');
          response.body.error.should.equal('Unable to find a breed group with the id: "236"')
          done();
        })
    })
  });


});