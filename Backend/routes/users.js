var express = require('express');
var router = express.Router();
// var mongo = require('mongodb');
var mongoose = require("mongoose"),
    User = require('./password');

    mongoose.connect('mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true');
// create a user a new user

// var mysql = require('mysql');
// var mongojs = require('mongojs');
// const MongoClient = require('mongodb').MongoClient;
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true');
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//   username: String,
//   password: String
// });

// var UserData = mongoose.model('Userdata', userSchema );

// var db = mongojs("mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true", ["MorvelApp"]);



/* GET users listing. */
//checking connection in node
// MongoClient.connect(uri, function(err, client) {
//   if(err) {
//        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//   }
//   console.log('Connected...');
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


//MYSQL
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'sdgp_arshad' 
// });

  router.post('/', function(req, res,next){

  //to check whether backend frontend data transfer is workin
  // res.send( {message: req.body.username} );
  var testUser = new User({
    username: req.body.username,
    password: req.body.password
});

// save user to database
testUser.save(function(err) {
    if (err) throw err;

// fetch user and test password verification
User.findOne({ username: req.body.username }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) throw err;
        res.send({ 'success': true, message: 'User not found'});
        console.log(req.body.password+':', isMatch); // -> Password123: true
    });

    // test a failing password
    user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) throw err;
        res.send({ 'success': false, message: 'User not found'})
        console.log(req.body.password+':', isMatch); // -> 123Password: false
    });
});
});
  
});
  // var username = req.body.username;
  // var password = req.body.password;

  // connection.query(
  //   "SELECT * FROM users WHERE username = ? AND password = ?",
  //   [username, password], function (err, row, field){

  //     if(err){
  //         console.log(err);
  //         res.send({ 'success': false, 'message': 'Could not connect to database'})
  //     }

  //     if(row.length > 0){
  //       res.send({ 'success': true, 'user': row[0].username});
  //     }
  //     else{
  //       res.send({ 'success': false, 'message': 'User not found'})
  //     }
    
  //   });
  // var myobj = {
    //     username: req.body.username,
    //     password: req.body.Password,
    //     movies: req.body.movies
    //    };
     
    //    var data = new UserData(myobj);
    //    data.save()
  


module.exports = router;
