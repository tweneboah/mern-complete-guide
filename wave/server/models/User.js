require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10;
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
  email: {
      type: String,
      required: true,
      trim: true,
      unique: 1 //true
  }, 
  password: {
      type: String,
      require: true,
      minlength: 4
  },

  name : {
      type: String,
      require: true,
      maxlength: 100
  },

  lastname : {
    type: String,
    require: true,
    maxlength: 100
 },

 cart: {
     type: Array,
     default: []
 },

 history:{
     type: Array,
     default: []
 },

 role: {
     type: Number,
     default: 0
 },

 token: {
   type: String  
 }
});


//Hashing the password
//1. Hash the password before saving to db

userSchema.pre('save', function(next){
    const user = this //it refers to user in the model

    //Anytime user changes their properties the password get re hashed but we only the re hash if a user changes a password therefore we will use an api from mongoose isModified

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I, function(err, salt){
            if(err){
                return next(err)
            }else {
                bcrypt.hash(user.password, salt, function(err, hash){
                    if(err){
                        return next(err)
                    }else {
                        user.password = hash
                        next()
                    };
                });
            }
        })
    
    }else {
       next()
    }

})

//Login
//Compare password

//this.password refers to the instance of the model which means the password that has been hashed and we are comparing it to the current login user password

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
       if(err) {
           return cb(err)
       }else {
           cb(null, isMatch)
       }
    })
}


//Generare token
userSchema.methods.generateToken = function(cb){
    var user = this
    //jwt takes the user.id and hashed/encrypt it, we do so by attaching the user.id with a secret key
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET);

    //Save the token into the db
    user.token = token;
    user.save(function(err, user){
        if(err){
            return cb(err)
        }else {
            cb(null, user)  
        }
    })
}


//Auth/Checking token if it exist

userSchema.statics.findByToken = function(token, cb){
  var user = this;

  //Verify the user thus decocode the token and see if this own id is in the token
  jwt.verify(token, process.env.SECRET, function(err, decocoded){
      //the decoded = user._id
       user.findOne({_id: decocoded, token: token}, function(err, user) {
           if(err){
               return cb(err)
           }else {
               cb(null, user)
           }
       })
  })
}


const User = mongoose.model('User', userSchema);

module.exports = User