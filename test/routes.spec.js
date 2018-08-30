process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server.js');



chai.use(chaiHttp);

describe('API Routes', function () {
  it('should return true', () => {
    ('true').should.equal('true');
  })
});