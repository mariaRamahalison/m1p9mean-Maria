
// Create new instance of the express server
const express = require('express');
const authHandler = require('../../Handler/AuthentificationHandler');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use('/public', express.static('public'));
app.use(express.static('dist/angular-node'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
process.env.TZ = 'Africa/Nairobi' 
// console.log((new Date().toString()));
// const corsOptions={
//     origin:"*",
//     methods:"GET;HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue:false,
//     optionsSuccesStatus:202
// };

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });

app.use(cors());

app.use('/api/*', authHandler.verifyToken);
// app.options('*', cors(corsOptions)) ;

module.exports = { app };
