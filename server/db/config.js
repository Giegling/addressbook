var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/addressbookdb', function (error) {
  if (error) {
    console.log(error);
  }
});