/*eslint-disable no-console, no-unused-vars, max-len*/

process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');
var knex = require('../db/knex');
var token = process.env.testToken;

chai.use(chaiHttp);

describe('Client Routes', () => {

  it('should return a home page', (done) => {
    chai.request(server)
    .get('/')
    .end((error, response) => {
      response.should.have.status(200);
      response.should.be.html;
      done();
    });
  });

  it('should return a 404 for a route that does not exist', (done) => {
    chai.request(server)
    .get('/non-existent-route')
    .end((error, response) => {
      response.should.have.status(404);
      done();
    });
  });
});

describe('API Routes', () => {
  let token;

    beforeEach(done => {

      knex.migrate.rollback()
        .then(() => knex.migrate.latest())
        .then(() => knex.seed.run())
        .then(() => done())
    });

  describe('GET /api/v1/groups', () => {

    it('should return all the groups', (done) => {
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

  describe('GET /api/v1/groups/:id', () => {

    it('should return a specific group', (done) => {
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

    it('should not return a 404 if a group does not exist', (done) => {
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
        });
    });
  });

  describe('GET /api/v1/breeds', () => {

    it('should return all the breeds', (done) => {
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

  describe('GET /api/v1/breeds/:id', () => {

    it('should return a specific breed', (done) => {
      chai.request(server)
        .get('/api/v1/breeds/1')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.breed[0].should.have.property('id');
          response.body.breed[0].should.have.property('breed_name');
          response.body.breed[0].should.have.property('life_span');
          response.body.breed[0].should.have.property('bred_for');
          response.body.breed[0].should.have.property('temperament');
          response.body.breed[0].should.have.property('weight');
          response.body.breed[0].should.have.property('height');
          response.body.breed[0].should.have.property('group_id');
          response.body.breed[0].id.should.equal(1);
          response.body.breed[0].breed_name.should.equal('Affenpinscher');
          response.body.breed[0].life_span.should.equal('10 - 12 years');
          response.body.breed[0].bred_for.should.equal('Small rodent hunting, lapdog');
          response.body.breed[0].temperament.should.equal('Stubborn, Curious, Playful, Adventurous, Active, Fun-loving');
          response.body.breed[0].group_id.should.equal(1);
          done();
        });
    });

    it('should not return a 404 if a breed does not exist', (done) => {

      chai.request(server)
        .get('/api/v1/breeds/250')
        .end((error, response) => {
          response.should.have.status(404);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('error');
          response.body.error.should.equal('Unable to find a breed with the id: "250"')
          done();
        });
    });
  });

  describe('POST /api/v1/groups', () => {

    it.skip('should create a new breed group', (done) => {
      chai.request(server)
        .post('/api/v1/groups')
        .set('token', token)
        .send({
          group_name: "Stitch",
          description: "Blue, six legged",
          breed_description: "Intergalatic criminals ",
          breed_count: 626
        })
        .end((error, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('id');
          response.body.id.shoulb.be.a('number');
          response.body.id.should.equal(8);
          done();
        });
    });

    it.skip('should return a 422 status code if breed group parameters are missing', (done) => {
      chai.request(server)
        .post('/api/v1/groups')
        .set('token', token)
        .send({
          group_name: "Mutts",
          breed_description: null,
          breed_count: 4
        })
        .end((error, response) => {
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('error');
          response.body.error.should.equal('Expected format: {group_name: <STRING>, description: <TEXT>, breed_count: <INTEGER>. You are missing: "description"}')
          done();
        });
    });
  });

  describe('POST /api/v1/breeds', () => {

    it.skip('should create a new breed', (done) => {
      chai.request(server)
        .post('/api/v1/breeds')
        .set('token', token)
        .send({
            breed_name: "Stitch",
            life_span: "Unknown",
            bred_for: "Crime",
            temperament: "Angry",
            weight: "53kgs",
            height: "78cm",
            lovable: true,
            group_id: 1
        })
        .end((error, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('id');
          response.body.id.shoulb.be.a('number');
          response.body.id.should.equal(8);
          done();
        });
    });

    it.skip('should return a 422 status code if breed parameters are missing', (done) => {
      chai.request(server)
        .post('/api/v1/breeds')
        .set('token', token)
        .send({
            breed_name: "Stitch",
            life_span: "Unknown",
            bred_for: "Crime",
            temperament: "Angry",
            weight: "53kgs",
            group_id: 1
        })
        .end((error, response) => {
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property('error');
          response.body.error.should.equal('Expected format: {breed_name: <STRING>, life_span: <STRING>, bred_for: <STRING>, temperament: <STRING>, weight: <STRING>, height: <STRING>, lovable: <BOOLEAN>, group_id: <INTEGER>. You are missing: "height"}')
          done();
        });
    });
  });

  describe('DELETE /api/v1/groups/:id', function() {

    it.skip('should delete a specific group from the database', (done) => {
        chai.request(server)
        .delete('/api/v1/groups/3')
        .end((error, response) => {
          response.should.have.status(204);
          done();
        });
      });

    it('should return a 404 for a group that does not exist', (done) => {
      chai.request(server)
      .delete('/api/v1/groups/404')
      .end((error, response) => {
        response.should.have.status(404);
        response.body.error.should.equal('Unable to find breed group with id: "404"');
        done();
      });
    });
  });

  describe('DELETE /api/v1/breeds/:id', function() {

    it('should delete a specific breed from the database', (done) => {
        chai.request(server)
        .delete('/api/v1/breeds/1')
        .end((error, response) => {
          response.should.have.status(204);
          done();
        });
      });

    it.skip('should return a 404 for a breed that does not exist', (done) => {
      chai.request(server)
      .delete('/api/v1/breeds/404')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(404);
        response.body.error.should.equal('Unable to find breed with id: "404"');
        done();
      });
    });
  });

  describe('PATCH /api/v1/groups/:id', () => {

    it.skip('should update a breed group record', (done) => {
      chai.request(server)
        .patch('/api/v1/groups/1')
        .set('token', token)
        .send({
          breed_description: "Furry friends"
        })
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          done();
        });
    });

    it.skip('should return a 422 for an incorrect request', (done) => {
      chai.request(server)
      .patch('/api/v1/groups/1')
      .set('token', token)
      .send({
        native_location: "The Arctic"
      })
      .end((error, response) => {
        response.should.have.status(422);
        response.body.error.should.equal('You do not have the correct parameters to complete this request');
        done();
      });
    });
  });

  describe('PATCH /api/v1/breeds/:id', () => {

    it.skip('should update a breed record', (done) => {
      chai.request(server)
        .patch('/api/v1/breeds/1')
        .set('token', token)
        .send({
          life_span: "Forever"
        })
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          done();
        });
    });

    it.skip('should return a 422 for an incorrect request', (done) => {
      chai.request(server)
      .patch('/api/v1/breeds/1')
      .set('token', token)
      .send({
        group_name: "The Hounds"
      })
      .end((error, response) => {
        response.should.have.status(422);
        response.body.error.should.equal('You do not have the correct parameters to complete this request');
        done();
      });
    });
  });


});
