const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const URLSlugs = require('mongoose-url-slugs');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  username: {type:String, required:true},
  email: {type:String, required:true},
  password: {type:String, unique:true, required:true},
  handicap: {type:Number}
});

const ScoreSchema = new mongoose.Schema({
  date: {type:String, required:true},
  golfcourse: {type:String, required:true},
  par: {type: Number, required:true},
  score: {type: Number, required:true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'}
});
UserSchema.pre('save', function(next) {
    const user = this;
    // password changed so we need to hash it (generate a salt)
    bcrypt.genSalt(12, function(err, salt) {
        if (err) {
            return next(err);
        }else{
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) { return next(err); }
                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        }
    });
});

UserSchema.methods.isValidPassword = function(user,password, cb) {
  if (user) {
      // then check if the password entered matches the password in the database
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        // regenerate session if passwordMatch is true
        if (passwordMatch === true){
          cb(true);
        }
        else {
          cb(false);
        }
      });
    }
    else {
      cb(false);
    }
}

// use plugins (for slug)
ScoreSchema.plugin(URLSlugs('title'));
// passport plugin
UserSchema.plugin(passportLocalMongoose);
// register your model
mongoose.model('User', UserSchema);
mongoose.model('Score', ScoreSchema);

// is the environment variable, NODE_ENV, set to PRODUCTION?
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/pp1445';
}
// connect to the database
mongoose.connect(dbconf);

module.exports = mongoose.model('User', UserSchema);
