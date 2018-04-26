var db = require('../test/db');
var expect = require('chai').expect;
var assert = require('assert');

describe('Data',function(){
   it('there are 3 topic', function(done){
      
      var qry = 'select title from Topics';
      
   db.query(qry, [], function(results){
      //expect(results.length).to.equal(3);
      assert.equal(results.length, 3);
      //console.log(results.);
  
     done();
   });

 });
});
