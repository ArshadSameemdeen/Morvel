
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

//     mongoose.connect('mongodb://arshad:arshad@morvel-shard-00-00-px1oo.mongodb.net:27017,morvel-shard-00-01-px1oo.mongodb.net:27017,morvel-shard-00-02-px1oo.mongodb.net:27017/test?ssl=true&replicaSet=Morvel-shard-0&authSource=admin&retryWrites=true');
// var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:  String,
    password: String,
});

UserSchema.pre("save", function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};