var express = require('express');
var router = express.Router();
// var mongo = require('mongodb');
// var assert = require('assert');

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{ type: String, required: true},
  password: String,
  movies: Array
}, {collation: 'user-data'});

var UserData = mongoose.model('userData', userSchema );



/* GET home page. */
router.post('/', function(req, res, next) {
    res.send({ message: req.body.username });
    var myobj = {
        username: req.body.username,
        password: req.body.Password,
        movies: req.body.movies
       };
     
       var data = new UserData(myobj);
       data.save()
});


module.exports = router;