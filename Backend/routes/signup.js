var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

// var mongoose = require('mongoose');
 
// mongoose.connect('mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true');
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//   username:{ type: String, required: true},
//   password: String,
//   password: String,
//   conpassword: String
// }, {collation: 'user-data'});

// var UserData = mongoose.model('UserData', userSchema );

// // const uri = "mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true"

// /* GET home page. */
router.post('/', function(req, res, next) {
  

  // var myobj = {
  //  name: req.body.name,
  //  email: req.body.email,
  //  password: req.body.Password,
  //  conpassword: req.body.conpassword,
  // };

  // var data = new UserData(myobj);
  // data.save()
  res.send( {message: req.body.username} );
  console.log(req.body.username)

 

  // mongo.connect(uri, function(err, db){
  //   assert.equal(null,err);
  //   db.collection('MorvelApp').insertOne(myobj, function(err, result){
  //     assert.equal(null, err);
  //     console.log('Item inserted');
  //     db.close();
  //   })
  // })
});

module.exports = router;
