var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbUrl = "mongodb://localhost/addressbookdb";

mongoose.connect(dbUrl, function (err) {
  if (err) {
    console.log('[DB] Connection failed to ' + dbUrl + '. ' + err);
  } else {
  	console.log('[DB] Successfully connected to: ' + dbUrl);
  }
});