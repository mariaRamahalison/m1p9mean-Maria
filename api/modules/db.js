// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;
// var database;
// const LOCAL_DATABASE = "mongodb://localhost:27017/app";

// // Init the server
// mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
//     {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//     }, function (error, client) {
//         if (error) {
//             console.log(error);
//             process.exit(1);
//         }
//         database = client.db();
//         console.log("Database connection done.");
//     });
// module.exports = { database, ObjectID };

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var url = 'mongodb://127.0.0.1:27017/Ekalyyyyy';
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
