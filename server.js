var db = require('./db');
var sqlite3 = require('sqlite3');

var qry = 'select title from Topics';
db.query(qry, [], function(results){
  console.log(results);
});

db.get('select count(*) as total from Topics', [], function(result){
  console.log(result);
});


 /*new sqlite3.Database('Topic', function(err){
   var db = this;
   db.all('select * from Topics where name = ? and id = ?', ['moe',1], function(err, results){
     console.log(results);
   });

  db.get('select count(*) from Topics', function(err, results){
    console.log(results);
 });*/


