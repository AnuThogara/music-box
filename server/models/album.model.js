var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var albumSchema =  new Schema({
  //congfiguration object or it fails
title: {
  type: String,
  require: true
},
artist: {
  type: String
},
releasedate: {
  type: Date,
  default: Date.now
},
isGood: {
  type: Boolean

}
});

var album = mongoose.model('album', albumSchema);
module.exports = album;
