var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiJquery = require('chai-jquery');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Homepage', function() {
  it('displays the homepage at / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('contains the word DevOps at / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.text.should.contain('DevOps')
        done();
      });
  });
});
