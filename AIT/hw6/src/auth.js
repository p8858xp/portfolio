const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.model('User');

function register(username, email, password, errorCallback, successCallback) {
    User.findOne({username: username}, (err, user, count) => {
      if(!user){
        if (username.length >= 8 && password.length >= 8){
          // create a new user
          bcrypt.hash(password, 10, function(err, hash) {
            new User({
              username: username,
              email: email,
              password: hash
            }).save(function(err, result, count) {
              // if save failed call errorCallback
              if (err) {
                console.log(err);
                // im getting this error back for some reason when i try registering something that should be successful but why?
                errorCallback({message: 'DOCUMENT SAVE ERROR'});
              }
              else {
                // successful
                console.log(result);
                successCallback(result);
              }
            });
          });
        }
        else {
          errorCallback({message: 'USERNAME PASSPORT TOO SHORT'});
        }
      }
      else {
        errorCallback({message: 'USERNAME ALREADY EXISTS'});
      }
    });
}

function login(username, password, errorCallback, successCallback) {
  User.findOne({username: username}, (err, user, count) => {
    if (!err && user) {
      // then check if the password entered matches the password in the database
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        // regenerate session if passwordMatch is true
        if (passwordMatch === true){
          successCallback(user);
        }
        else {
          errorCallback({message: 'PASSWORDS DO NOT MATCH'});
        }
      });
    }
    else {
      // user doesn't exist so call the errorCallback function
      errorCallback({message: 'USER NOT FOUND'});
    }
  });
}

function startAuthenticatedSession(req, user, cb) {
  req.session.regenerate((err) => {
    if (!err) {
      req.session.user = user;
      cb();
    }
    else {
      cb(err);
    }
  });
}

module.exports = {
  startAuthenticatedSession: startAuthenticatedSession,
  register: register,
  login: login
};
