
// Create new instance of the express server
const express = require('express');
const cors = require('cors');
const app = express();
// import { isEmail } from 'validator';



// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
app.use('/public', express.static('public'));
app.use(express.static('dist/angular-node'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

module.exports = { app };
