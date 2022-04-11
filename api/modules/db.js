
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var url = 'mongodb://localhost:27017/Ekaly';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected:', url)
  });
  
  db.on('error', err => {
    console.error('connection error:', err)
  })
  
module.exports = { db};
