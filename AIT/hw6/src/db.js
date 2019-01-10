const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

// add your schemas
const ArticleSchema = new mongoose.Schema({
  title: {type:String, required:true},
  url: {type:String, required:true},
  description: {type:String, unique:true, required:true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
});
const UserSchema = new mongoose.Schema({
  username: {type:String, required:true},
  email: {type:String, required:true},
  password: {type:String, unique:true, required:true}
});
// use plugins (for slug)
ArticleSchema.plugin(URLSlugs('title'));
// register your model
mongoose.model('User', UserSchema);
mongoose.model('Article', ArticleSchema);

mongoose.connect('mongodb://localhost/hw06');
