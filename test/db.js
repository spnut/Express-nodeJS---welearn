var sqlite3 = require('sqlite3');
var _db;

module.exports = {
   connect: function(cb){ 
      if(_db)
         return cb(_db);
      new sqlite3.Database('Topic',function(err){
         _db = this;
         cb(_db);
      });
  },
   query: function(qry, params, cb){
     this.connect(function(db){
       db.all(qry, params, function(er, results){
         cb(results);

         });
     });
   },

   get: function(qry, params, cb){
     this.connect(function(db){
       db.get(qry, params, function(er, result){
         cb(result);

         });
     });
   }
};
/*new sqlite3.Database('Topic',function(err){
   var db= this;
   db.all('select * from topic where name=? and id=?',function(err, results){
     console.log(results);
   }); 
   db.get('select')*/

