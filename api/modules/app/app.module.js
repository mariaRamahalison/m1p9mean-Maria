
// Create new instance of the express server
const express = require('express');
const authHandler= require('../../Handler/AuthentificationHandler');
const cors = require('cors');
const app = express();
require('dotenv').config();


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
app.use('/api/*',authHandler.verifyToken);
app.use('/public', express.static('public'));
app.use(express.static('dist/angular-node'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

module.exports = { app };
