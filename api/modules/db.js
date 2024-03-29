
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var url = 'mongodb+srv://maria:maria@m1p9mean-maria.jn6by.mongodb.net/ekaly?retryWrites=true&w=majority';
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
